import { Component, input, linkedSignal, OnDestroy, OnInit, output, signal } from '@angular/core';
import { Object3d } from '../../../../interfaces/objects3d.interface';
import machinesdata from '../../../../data/machines-data/machines-data.json';
import { CategoryFilterPipe } from '../../../../pipes/machines.pipe';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subscription } from 'rxjs';


@Component({
  selector: 'machine-card-item',
  imports: [CategoryFilterPipe,RouterLink],
  templateUrl: './machine-card-item.component.html',
})
export default class MachineCardItemComponent implements OnInit,OnDestroy{



  constructor(private route: ActivatedRoute){}

  //local data de test
  machines:Object3d[] =  machinesdata;
  category = signal<string>("todas");
  widthWindow= signal<number>(window.innerWidth);


  //Se define un Subscription que actua como manija de conexion para gestionar subscripciones y fugas de memoria
  queryParamsSubscription: Subscription | undefined;

  ngOnInit(): void {
    this.queryParamsSubscription = this.route.paramMap.subscribe((value)=>{
      if(value.get("category") != null){
        this.category.set(value.get("category")!);
      }
    })
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription?.unsubscribe();
  }

}
