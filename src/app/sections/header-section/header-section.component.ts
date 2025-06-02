import { LowerCasePipe } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import {navLinks} from '../../interfaces/navLinks.interface'

@Component({
  selector: 'app-header-section',
  imports: [RouterLink],
  templateUrl: './header-section.component.html',
})
export class HeaderSectionComponent {


  //Menu items

  menuItems: navLinks[] = [
    {
      name:"Home",
      url:""
    },
    {
      name:"Nosotros",
      url:""
    },
    {
      name:"Equipo",
      url:""
    },
    {
      name:"Proyectos",
      url:"proyectos"
    },
    {
      name:"Maquinas",
      url:"maquinas"
    },
    {
      name:"Noticias",
      url:""
    }
  ]

  testButton(a:string){
    console.log(a);

  }



}
