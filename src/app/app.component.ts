import { Component } from '@angular/core';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { RouterOutlet } from '@angular/router';
import { HeaderSectionComponent } from './sections/header-section/header-section.component';
import { FooterSectionComponent } from './sections/footer-section/footer-section.component';
import { FilterComponent } from './sections/main-section/components/projects/components/filter/filter.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    HeaderSectionComponent,
    FooterSectionComponent,
    FilterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fablab';
}
