
import { Component } from '@angular/core';
import { CarrouselComponent } from './components/carrousel/carrousel.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

@Component({
  selector: 'app-main-section',
  imports: [CarrouselComponent, ProyectsComponent],
  templateUrl: './main-section.component.html',
})
export class MainSectionComponent {}

