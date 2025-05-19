import { Component } from '@angular/core';
import { CarrouselOwnComponent } from './components/carrousel-own/carrousel-own.component';
import { ProyectsComponent } from './components/projects/projects.component';

@Component({
  selector: 'app-main-section',
  imports: [ProyectsComponent, CarrouselOwnComponent],
  templateUrl: './main-section.component.html',
})
export class MainSectionComponent {}
