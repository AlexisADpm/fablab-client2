import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./shared/card/card.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { BodyComponent } from "./sections/body/body.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, HeaderSectionComponent, BodyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fablab';
}
