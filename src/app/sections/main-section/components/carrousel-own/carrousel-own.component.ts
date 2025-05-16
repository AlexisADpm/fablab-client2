import { Component, ElementRef, QueryList, Renderer2, signal, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carrousel-own',
  imports: [],
  templateUrl: './carrousel-own.component.html',
  styleUrl: './carrousel-own.component.css'
})
export class CarrouselOwnComponent {



  constructor(private renderer:Renderer2){}


  //Selector de padre
  @ViewChild('carrousel') carrousel!: ElementRef;

  //Selector de hijos
  @ViewChildren('slide') slides!: QueryList<ElementRef>;

  activePositionIndex = signal<number>(0);
  containerWidth = signal<number>(0);

  next(){
    this.containerWidth.set(this.carrousel.nativeElement.offsetWidth);
    this.activePositionIndex.update(pos =>(pos<this.slides.length-1)? pos + 1 : 0);
    this.renderer.setStyle(this.carrousel.nativeElement,'transform',`translateX(${-this.containerWidth()*this.activePositionIndex()}px)`);
  }

  prev(){
    this.containerWidth.set(this.carrousel.nativeElement.offsetWidth);
    this.activePositionIndex.update(pos =>(pos>0)? pos - 1 : this.slides.length-1);
    this.renderer.setStyle(this.carrousel.nativeElement,'transform',`translateX(${-this.containerWidth()*this.activePositionIndex()}px)`);
  }

}
