import { Component, input } from '@angular/core';
import { Object3d } from '../../../../interfaces/objects3d.interface';
import machinesdata from '../../../../data/machines-data/machines-data.json';
import { CategoryFilterPipe } from '../../../../pipes/machines.pipe';
import routes from '../../machines.routes';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'machine-card-item',
  imports: [CategoryFilterPipe],
  templateUrl: './machine-card-item.component.html',
  styles: ``
})
export default class MachineCardItemComponent {

  //local data de test
  machines:Object3d[] =  machinesdata;

  ngOnInit(){
    console.log(this.machines);
  }


  //TODO: Recibe el parametro de filtro de la ruta y filtra para el pipe
  parametroRutaFilter = routes;


}
