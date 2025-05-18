import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
})
export class CardComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imgUrl: string = '';
}
//Ponemos los inputs, todos como string, de momento, y le asignamos un valor vasio para iniciarlo asi por defecto
