import { Component, inject, ElementRef, OnInit, ViewChild,} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as THREE from 'three';
import {PLYLoader } from 'three/examples/jsm/loaders/PLYloader.js';




@Component({
  selector: 'app-models-component',
  imports: [],
  templateUrl: './models-component.component.html',
})
export default class ModelsComponentComponent implements OnInit{

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

  ngOnInit(){
    console.log(this.idModel);
    console.log(this.canvasContainer);
    this.initScene();
    this.loadSTLModel();
    this.animate();
  }

  private initScene(): void {

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    this.camera.position.set(0, 0, 0);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.canvasContainer.nativeElement.appendChild(this.renderer.domElement);

    //rotacion de objeto
    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(10, 10, 10).normalize();
    this.scene.add(light);
  }

  private loadSTLModel(): void {
  const loader = new PLYLoader();

  //El objeto se puede girar solo al momento de su carga
  loader.load("../../../../Patchwork chair.ply", (geometry) => {
    const material = new THREE.MeshStandardMaterial({ color: 0x00ff00, metalness: 0.5, roughness: 0.5 });
    this.model = new THREE.Mesh(geometry, material);
    // this.model.rotation.x = Math.PI / -2;
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


}
