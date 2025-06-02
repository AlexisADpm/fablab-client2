import { Component, inject, ElementRef, OnInit, ViewChild, signal, Renderer2, viewChildren, QueryList, ViewChildren, AfterViewInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import {Object3d} from '../../../interfaces/objects3d.interface'


@Component({
  selector: 'app-models-component',
  imports: [],
  templateUrl: './models-component.component.html',
})
export default class ModelsComponentComponent implements OnInit,AfterViewInit{

  //Inyecciones e inserciones
  constructor(private renderer2: Renderer2){
  }


  //REFERENCIAS DEL DOM
  //tag primer elemento animado
  @ViewChild('firstElement',{static: true}) firstElement!: ElementRef;
  //Tag de los cuadros
  @ViewChild('informativeElements',{static: true}) textContainer!: ElementRef;
  //Obtenemos tag de canvas
  @ViewChild('modelthree', { static: true }) canvasContainer!: ElementRef;

  //Objeto de prueba
  modelo3dTest: Object3d = {
    id: 1,
    name: "Modelo test",
    typeModel: "STL",
    path: "../../../../assets/Mini_Ender_3_Pro.stl",
    positions: [
      [-18,137,80],
      [0,70,200],
      [80,25,130]
    ],
    content:{
      title: "Ender 3 V2",
      typeName: "impresora 3D",
      contentCard:[{
        text: `El fusor, también conocido como hotend,
        es el componente de la impresora 3D encargado de fundir y extruir el filamento plástico.
        Lleva el material hasta su punto de fusión y lo deposita capa por capa para construir el objeto con precisión.
        Su temperatura varía según el tipo de material, como PLA, ABS o PETG, permitiendo una impresión óptima.`,
        textPosition: "start"
      },
      {
        text: `La cama caliente es la superficie sobre la que se imprime el objeto y puede calentarse para mejorar la adherencia del filamento y reducir el riesgo de deformaciones.
        En impresoras 3D de resina, su función cambia,
        ya que sostiene el objeto mientras se forma desde la base mediante fotocurado, garantizando una correcta solidificación de cada capa.`,
        textPosition: "start"
      },
      {
        text: `El panel interactivo, que puede ser una pantalla táctil o LCD, permite al usuario controlar la impresora y ajustar parámetros como temperatura, velocidad y nivelación.
        Algunas impresoras avanzadas incluyen pantallas con previsualización del modelo antes de la impresión, lo que facilita la configuración y mejora la experiencia de usuario.`,
        textPosition: "end"
      }
    ]
    }
  }
  //Tomar elemento de tarjetas dom para referencia de animacion
  actualElementAnimate: HTMLElement | null = null;

  //Tomar posicion actual
  actualObjPosition = signal<number>(0);

  //Se esta animando
  animateState: boolean = false;
  //Obtenemos parametros de la ruta
  activeRoute = inject(ActivatedRoute);
  idModel = this.activeRoute.snapshot.paramMap.get('idModel');


  //Parametros three js
  private scene!: THREE.Scene;
  private camera!: THREE.PerspectiveCamera;
  private renderer!: THREE.WebGLRenderer;
  private model!: THREE.Mesh;

  //test para detectar posiciones del objeto
  raycaster = new THREE.Raycaster();
  mouse = new THREE.Vector2();


  //LifeCyclehooks
  ngOnInit(){
    this.initScene();
    this.loadSTLModel();
    this.animate();
  }

  ngAfterViewInit(){
    this.actualElementAnimate = this.firstElement.nativeElement;
    console.log(this.actualElementAnimate);

  }


  private initScene(): void {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 100, 400);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    //Cambios de color de la escena
    this.scene.background = new THREE.Color(0xffffff);

    //Ejes de ayuda donde rojo=x, verde=y y azul=z
    const axesHelper = new THREE.AxesHelper(1000);
    this.scene.add(axesHelper);


    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    this.scene.add(light);
  }

  private loadSTLModel(): void {
    const loader = new STLLoader();

    //El objeto se puede girar solo al momento de su carga
    loader.load("../../../../assets/Mini_Ender_3_Pro.stl", (geometry) => {
      const material = new THREE.MeshStandardMaterial({ color: 0xE2E0E0, metalness: 0.5, roughness: 0.5 });
      this.model = new THREE.Mesh(geometry, material);
      this.model.rotation.x = Math.PI / -2;
      this.scene.add(this.model);
    },
    (xhr) => {
      console.log(`Carga: ${(xhr.loaded / xhr.total) * 100}% completada`);
    },
    (error) => {
      console.error('Error al cargar el modelo STL', error);
    });

  }

  //Animar camara de movimiento por frame
  private animate(): void {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);

  }

  //botones para mover camara en escena
  nextCameraPosition(): void{
    if(this.animateState) return;
    this.animateState = true;
    this.nextInformativeSquare();

    if(this.actualObjPosition() == this.modelo3dTest.positions.length){
      console.log("Terminaron los movimientos");
      return;
    }
    // let [x,y,z] = this.modelo3dTest.positions[this.actualObjPosition()];
    // this.camera.position.set(x,y,z);
    const targetPosition = new THREE.Vector3(... this.modelo3dTest.positions[this.actualObjPosition()]);
    const speed = 0.05; // Velocidad de interpolación
    console.log(... this.modelo3dTest.positions[this.actualObjPosition()]);
    this.smoothCameraMovement(targetPosition,speed);
  }

  //Movimiento fluido de la camara
  smoothCameraMovement(vector: THREE.Vector3,speed:number): void{

    let animationId = requestAnimationFrame(()=>this.smoothCameraMovement(vector,speed));
    this.camera.position.lerp(vector, speed);

    if(this.camera.position.distanceTo(vector) < 0.01){
      cancelAnimationFrame(animationId);
      this.animateState = false;
      this.actualObjPosition.update((pos)=>pos+1);
    }
  }

  //Siguiente cuadro informativo
  //TODO: 1. Crear la tarjeta de manera dinamica en otra funcion 2. Crear animacion de salida
  nextInformativeSquare(){
    if(this.actualObjPosition() === this.modelo3dTest.positions.length) return;

    this.animateCardElementsPrevious(this.actualElementAnimate);

    //arreglar en una funcion mas pequeña
    let genericDivCard: HTMLElement = this.createCardInformative();

    const newElement = this.renderer2.createElement('div');
    this.renderer2.appendChild(newElement,genericDivCard);

    this.renderer2.addClass(newElement,'absolute');
    this.renderer2.addClass(newElement,'w-full');
    this.renderer2.addClass(newElement,'h-full');
    this.renderer2.addClass(newElement,'flex');
    this.renderer2.addClass(newElement,`justify-${this.modelo3dTest.content.contentCard[this.actualObjPosition()].textPosition}`);

    this.renderer2.appendChild(this.textContainer.nativeElement,newElement);

    this.actualElementAnimate = newElement;

  }

  //Creacion tarjeta
  createCardInformative(): HTMLElement{

    let card = this.renderer2.createElement('div');
    ['card', 'card-dash', 'bg-base-100', 'w-96', 'my-auto'].forEach((classDOM)=>{
      this.renderer2.addClass(card,classDOM);

    })

    let cardBody = this.renderer2.createElement('div');
    this.renderer2.addClass(cardBody,"card-body");

    const title = this.renderer2.createElement('h2');
    this.renderer2.addClass(title, 'card-title');
    this.renderer2.setProperty(title, 'innerText', this.modelo3dTest.content.title);

    const paragraph = this.renderer2.createElement('p');
    this.renderer2.setProperty(paragraph, 'innerText', this.modelo3dTest.content.contentCard[this.actualObjPosition()].text);

    this.renderer2.appendChild(card,cardBody);
    this.renderer2.appendChild(cardBody,title);
    this.renderer2.appendChild(cardBody,paragraph);

    if(this.actualObjPosition() < this.modelo3dTest.positions.length-1){
      const button = this.renderer2.createElement('button');
      this.renderer2.addClass(button, 'btn');
      this.renderer2.setProperty(button, 'innerText', 'Siguiente');
      this.renderer2.listen(button,'click',()=>this.nextCameraPosition());
      this.renderer2.appendChild(cardBody,button);
    }
    return card;

  }


  //animacion para tarjetas
  animateCardElementsPrevious(element:HTMLElement | null){
    console.log(element);
    if(!element) return;

    this.renderer2.setStyle(element, 'transform', 'translateX(-100%)');
  }

  //Funcion para detectar espacios tridimensionales
  detectObject(event: MouseEvent) {
    this.mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    this.mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children);

    if (intersects.length > 0) {
      console.log("Objeto detectado:", intersects[0].object.name);
      console.log("Posición en el espacio 3D:", intersects[0].point);
    }

  }

}
