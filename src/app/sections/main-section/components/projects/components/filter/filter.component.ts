import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'filter-component',
  imports: [],
  templateUrl: './filter.component.html',
})
export class FilterComponent {

  filtrosAplicados = output<string[]>();


  constructor(){}

  applyFilters(){
    this.filtrosAplicados.emit(["hola"]);
  }

}
