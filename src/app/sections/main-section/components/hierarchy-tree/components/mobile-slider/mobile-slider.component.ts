import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@Component({
  selector: 'mobile-slider',
  imports: [],
  templateUrl: './mobile-slider.component.html',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class MobileSliderComponent {
  // Define este array en el componente TypeScript que contiene este HTML (ej: nosotros.component.ts)

  teamMembers = [
    {
      name: 'María José Gutiérrez',
      role: 'Líder del Laboratorio',
      img: '../../../../../../../assets/imgs/headshots/maria-jose.jpg', // Reemplazar con la ruta real
    },
    {
      name: 'Nicolás Escobar',
      role: 'Líder del Laboratorio',
      img: '../../../../../../../assets/imgs/headshots/nicolas-escobar.jpg',
    },
    {
      name: 'Jorge Varas',
      role: 'Coordinador',
      img: '../../../../../../../assets/imgs/headshots/profe-varas.jpg',
    },
    {
      name: 'Ised Chávez', // Nombre temporal
      role: 'Coordinadora Administrativa',
      img: '../../../../../../../assets/imgs/headshots/profe-ised.jpg',
    },
    {
      name: 'Pablo Hernándes', // Nombre temporal
      role: 'Equipo Administrativo',
      img: '../../../../../../../assets/imgs/headshots/pablo-hernandes.jpg',
    },
    {
      name: 'Valeria Rojas', // Nombre temporal
      role: 'Equipo Administrativo',
      img: '../../../../../../../assets/imgs/headshots/valeria-rojas.jpg',
    },
  ];
}
