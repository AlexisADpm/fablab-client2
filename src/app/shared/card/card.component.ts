import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  templateUrl: './card.component.html',
})
export class CardComponent {
  title = input<string>('');
  description = input<string>('');
  imgUrl = input<string>('');
}
//Ponemos los inputs, todos como string, de momento, y le asignamos un valor vasio para iniciarlo asi por defecto
