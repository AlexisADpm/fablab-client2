import { Component } from '@angular/core';
import { MachinesCardListComponent } from "../components/machines-card-categories/machines-card-list.component";
import MachineCardItemComponent from "../components/machine-card-item-list/machine-card-item.component";

@Component({
  selector: 'app-machines-page',
  imports: [MachinesCardListComponent,MachineCardItemComponent],
  templateUrl: './machines-page.component.html',
  styles: ``
})
export class MachinesPageComponent {




}
