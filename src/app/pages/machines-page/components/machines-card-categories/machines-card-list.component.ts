import { Component } from '@angular/core';

@Component({
  selector: 'machines-card-list',
  imports: [],
  templateUrl: './machines-card-list.component.html',
  styles: ``
})
export class MachinesCardListComponent {

  //categorias disponibles
  categories:string[] = ["Todas","Maquinas de impresion 3d","Cortadoras laser","Brazos roboticos"];

  
}
