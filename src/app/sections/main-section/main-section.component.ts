import { Component } from '@angular/core';

import { CarrouselOwnComponent } from './components/carrousel-own/carrousel-own.component';
import { ProyectsComponent } from './components/projects/projects.component';
import { HierarchyTreeComponent } from "./components/hierarchy-tree/hierarchy-tree.component";
import { ForUsCardsComponent } from "./components/for-us-cards/for-us-cards.component";

@Component({
  selector: 'app-main-section',
  imports: [CarrouselOwnComponent, ProyectsComponent, HierarchyTreeComponent, ForUsCardsComponent],
  templateUrl: './main-section.component.html',
})
export class MainSectionComponent {}
