import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from "./shared/card/card.component";
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { MainPageComponent } from "./pages/main-page/main-page.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CardComponent, HeaderSectionComponent, MainPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'fablab';
}
