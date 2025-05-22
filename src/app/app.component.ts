import { Component} from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from "./sections/header-section/header-section.component";
import { FooterSectionComponent } from "./sections/footer-section/footer-section.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderSectionComponent, FooterSectionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fablab';
}
