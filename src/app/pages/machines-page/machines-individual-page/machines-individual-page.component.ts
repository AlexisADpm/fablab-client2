import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import machinesdata from '../../../data/machines-data/machines-data.json';
import { Object3d } from '../../../interfaces/objects3d.interface';


@Component({
  selector: 'app-machines-individual-page',
  imports: [RouterLink],
  templateUrl: './machines-individual-page.component.html',
})
export class MachinesIndividualPageComponent implements OnInit {

  //Guardar maquina activa
  individualMachine: Object3d | null = null;
  //Guardar id de ruta activa
  idRutaActiva: number | null = null;

  constructor(private rutaActiva: ActivatedRoute){
  }


  ngOnInit(): void {
    if(this.rutaActiva.snapshot.paramMap.get("id")){
      this.idRutaActiva = parseInt(this.rutaActiva.snapshot.paramMap.get("id")!);
      this.individualMachine = machinesdata.find((el) => el.id === this.idRutaActiva)!
    }
  }



}
