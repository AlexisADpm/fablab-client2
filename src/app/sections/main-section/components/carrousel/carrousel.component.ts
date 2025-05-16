import { Component, ElementRef, QueryList, Renderer2, signal, ViewChildren } from '@angular/core';
import { initFlowbite } from 'flowbite';
// import function to register Swiper custom elements



@Component({
  selector: 'carrousel-main',
  imports: [],
  templateUrl: './carrousel.component.html',
  styleUrls: ['./carrousel.component.css']
})
export class CarrouselComponent {
  //Insertamos renderer 2 para asignar clases
  constructor(private renderer: Renderer2){}

  //Test logica carrusel

  activeElement = signal<number>(0);

  ngOnInit(): void {
    initFlowbite();
  }

}
