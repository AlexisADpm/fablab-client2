import { Component, ElementRef, QueryList, signal, ViewChild, ViewChildren, viewChildren } from '@angular/core';
import { CarrouselComponent } from "./components/carrousel/carrousel.component";
import { CarrouselOwnComponent } from "./components/carrousel-own/carrousel-own.component";

@Component({
  selector: 'app-main-section',
  imports: [CarrouselComponent, CarrouselOwnComponent],
  templateUrl: './main-section.component.html',
})
export class MainSectionComponent {







}
