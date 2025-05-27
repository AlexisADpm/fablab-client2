import { Component, inject, ElementRef, OnInit, ViewChild, signal, Renderer2, viewChildren, QueryList, ViewChildren, AfterViewInit,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
import { STLLoader } from 'three/examples/jsm/loaders/STLLoader.js';
import {object3d} from '../../../interfaces/objects3d.interface'




@Component({
  selector: 'app-models-component',
  imports: [],
  templateUrl: './models-component.component.html',
})
export default class ModelsComponentComponent implements OnInit,AfterViewInit{


  constructor(private renderer2: Renderer2){
  }


  //Tag de los cuadros
  @ViewChildren('informativeElements',{}) textContainer!: QueryList<ElementRef>;


  //Objeto de prueba
  modelo3dTest: object3d = {
    id: 1,
    name: "Modelo test",
    type: "STL",
    path: "../../../../assets/Mini_Ender_3_Pro.stl",
    positions: [
      [-18,137,80],
      [0,70,200],
      [80,25,130]
    ],
    content:{
      title: "Ender 3 V2",
      type: "impresora 3D",
      contentCard:["lorem ipsum","hola","mundo"]
    }
  }

  //Div con contenido
  genericDivCard: string = "<div class='card card-dash bg-base-100 w-96'><div class='card-body'><h2 class='card-title'>Card Title</h2><p>A card component has a figure, a body part, and inside body there are title and actions parts</p><div class='card-actions justify-end'><button class='btn btn-primary'>Buy Now</button></div></div></div>" 

  //Tomar posicion actual
  actualObjPosition = signal<number>(0);

  //Se esta animando
  animateState: boolean = false;
  //Obtenemos parametros de la ruta
  activeRoute = inject(ActivatedRoute);
  idModel = this.activeRoute.snapshot.paramMap.get('idModel');

  //Obtenemos tag de canvas
  @ViewChild('modelthree', { static: true }) canvasContainer!: ElementRef;

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
    console.log(this.idModel);
    console.log(this.canvasContainer);
    this.initScene();
    this.loadSTLModel();
    this.animate();
  }

  ngAfterViewInit(){
    const newElement = this.renderer2.createElement('p');
    const text = this.renderer2.createText('¡Hola desde Renderer2!');
    this.renderer2.addClass(newElement,'absolute');
    this.renderer2.appendChild(newElement, text);
    this.renderer2.appendChild(this.textContainer.get(0)?.nativeElement,newElement);
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
  //TODO: para los cuadros informativos debo 1. crear un div dinamico 2. añadir texto y posicion del cuadro al objeto 3. animacion basica smmoth 4. HARD: hacer el movimiento prev
  nextInformativeSquare(){
    if(this.actualObjPosition()==0){
      this.renderer2.setStyle(this.textContainer.get(0)?.nativeElement.lastChild,'transform',`translateX(${-window.innerWidth*1}px)`);
      const newElement = this.renderer2.createElement('div');
      const text = this.renderer2.setProperty(this.textContainer.get(0)?.nativeElement,'innerHTML',this.genericDivCard);

      this.renderer2.addClass(newElement,'absolute');
      this.renderer2.appendChild(newElement, text);
      this.renderer2.appendChild(this.textContainer.get(0)?.nativeElement,newElement);
    }
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
