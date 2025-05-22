import { Component } from '@angular/core';
import { MobileSliderComponent } from "./components/mobile-slider/mobile-slider.component";
import { HierarchyTreeDesktopComponent } from "./components/hierarchy-tree-desktop/hierarchy-tree-desktop.component";

@Component({
  selector: 'hierarchy-tree',
  imports: [MobileSliderComponent],
  templateUrl: './hierarchy-tree.component.html',
  styleUrl: './hierarchy-tree.component.css'
})
export class HierarchyTreeComponent {

}
