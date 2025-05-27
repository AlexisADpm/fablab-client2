import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import dblocalproyectos from '../../dblocalproyectos.json';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'individual-project',
  templateUrl: './individual-project.component.html',
  imports: [RouterLink, CommonModule],
  standalone: true,
})
export class IndividualProjectComponent implements OnInit {
  proyecto: any;

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.proyecto = dblocalproyectos.find(
      (p: any) => String(p.proyectId) === id
    );
  }

  constructor(private route: ActivatedRoute) {}
}
