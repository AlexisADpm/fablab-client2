import { Component } from '@angular/core';
import { ProyectsComponent } from './components/proyects/proyects.component';
import { CarrouselOwnComponent } from './components/carrousel-own/carrousel-own.component';

@Component({
  selector: 'app-main-section',
  imports: [ProyectsComponent, CarrouselOwnComponent],
  templateUrl: './main-section.component.html',
})
export class MainSectionComponent {}
