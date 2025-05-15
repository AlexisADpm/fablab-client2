import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-header-section',
  imports: [],
  templateUrl: './header-section.component.html',
})
export class HeaderSectionComponent {


  //Menu items

  menuItems: string[] = [
    "Nosotros",
    "Equipo",
    "Proyectos",
    "Noticias"
  ]



}