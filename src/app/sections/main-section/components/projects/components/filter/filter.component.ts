import { Component, output, signal, Renderer2, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'filter-component',
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent implements AfterViewInit{


  @ViewChildren("options") optionsSelected!: QueryList<ElementRef>;


  filtrosAplicados = output<string[]>();
  filtrosArray = [];


  constructor(private render: Renderer2){

  }

  ngAfterViewInit(): void {
    console.log( this.optionsSelected);



  }






  applyFilters(){
    const filtrosSeleccionados: string[] = [];

    this.optionsSelected.forEach((option: ElementRef) => {
      if(option.nativeElement.checked){
        filtrosSeleccionados.push(option.nativeElement.value);
      }
    });
    
    console.log(filtrosSeleccionados);

    this.filtrosAplicados.emit(filtrosSeleccionados);
  }

}
