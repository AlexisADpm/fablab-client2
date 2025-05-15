import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./shared/card/card.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { BodyComponent } from "./sections/body/body.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, HeaderSectionComponent, BodyComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fablab';
}
