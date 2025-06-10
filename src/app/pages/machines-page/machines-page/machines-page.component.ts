import { Component, input, OnInit, signal } from '@angular/core';
import { MachinesCardListComponent } from "../components/machines-card-categories/machines-card-list.component";
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-machines-page',
  imports: [MachinesCardListComponent,RouterOutlet],
  templateUrl: './machines-page.component.html',
  styles: ``
})
export class MachinesPageComponent{

  categoryHeaderName = signal<string>("Todas");
}
