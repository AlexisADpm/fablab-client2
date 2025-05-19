import { Component, effect, ElementRef, QueryList, Renderer2, signal, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-carrousel-own',
  imports: [],
  templateUrl: './carrousel-own.component.html',
  styleUrl: './carrousel-own.component.css'
})
export class CarrouselOwnComponent {


  //Array de imagenes de prueba
  objImages: string[] = ["element1","element2","element3"];

  constructor(private renderer:Renderer2){}

  //Selector de padre
  @ViewChild('carrousel') carrousel!: ElementRef;

  //Selector de hijos
  @ViewChildren('slide') slides!: QueryList<ElementRef>;
  @ViewChildren('navigationButtons') navButttons!: QueryList<ElementRef>;

  activePositionIndex = signal<number>(0);
  containerWidth = signal<number>(0);

  //LifeCycle ngAfterView para inicializar las referencias cuando el dom carge

  ngAfterViewInit(){
    this.renderer.removeClass(this.navButttons.get(0)?.nativeElement,"text-gray-100/70");
    this.renderer.addClass(this.navButttons.get(0)?.nativeElement,"text-black/70");

    //Api de Js que observa el cambio de un contenedor y no la ventana
    const resizeObserver = new ResizeObserver(()=>{
      this.containerWidth.set(this.carrousel.nativeElement.offsetWidth);
    });
    resizeObserver.observe(this.carrousel.nativeElement);
  }

  //TODO: NGONDESTROY por si lo necesito para el resizeobserver


  //Change slides
  moves(pos:number): void{
    //move +
    if(pos){
      this.activePositionIndex.update(pos =>(pos<this.slides.length-1)? pos + 1 : 0);
    }
    //move -
    else{
      this.activePositionIndex.update(pos =>(pos>0)? pos - 1 : this.slides.length-1);
    }
    this.renderer.setStyle(this.carrousel.nativeElement,'transform',`translateX(${-this.containerWidth()*this.activePositionIndex()}px)`);
    this.changeDotColor(this.activePositionIndex());
  }

  //Ir al slide
  goToSlide(slidePos: number): void{
    this.activePositionIndex.set(slidePos);
    this.renderer.setStyle(this.carrousel.nativeElement,'transform',`translateX(${-this.containerWidth()*this.activePositionIndex()}px)`);
    this.changeDotColor(slidePos);
  }

  changeDotColor(pos:number): void{
    this.navButttons.forEach((el)=>{
      this.renderer.removeClass(el.nativeElement,"text-black/70");
      this.renderer.addClass(el.nativeElement,"text-gray-100/70");
    })
    this.renderer.removeClass(this.navButttons.get(pos)?.nativeElement,"text-gray-100/70");
    this.renderer.addClass(this.navButttons.get(pos)?.nativeElement,"text-black/70");
  }
}
