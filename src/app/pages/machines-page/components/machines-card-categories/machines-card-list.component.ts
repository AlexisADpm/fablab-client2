import { Component, output} from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { navLinks } from '../../../../interfaces/navLinks.interface';

@Component({
  selector: 'machines-card-list',
  imports: [RouterLink,RouterLinkActive],
  templateUrl: './machines-card-list.component.html',
  styles: ``
})
export class MachinesCardListComponent{

  //Emitir categoria
  emitCategory = output<string>();

  //categorias disponibles
  //TODO: Interfaz para nombres y url correctas CORREGIR ESTA IMPLEMENTACION
  categories: navLinks[] = [
    {
      name:"Todas",
      url:"todas"},
    {
      name:"Maquinas de impresión 3D",
      url:"maquinasdeimpresion3d"},
    {
      name:"Cortadoras Laser",
      url:"cortadoraslaser"},
    {
      name:"Brazos Robóticos",
      url:"brazosroboticos"
    }];

    emitCategoryToMachines(category:string){
      this.emitCategory.emit(category);
    }



}
