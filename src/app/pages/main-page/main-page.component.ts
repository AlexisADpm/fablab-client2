import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../../sections/header-section/header-section.component";
import { FooterSectionComponent } from "../../sections/footer-section/footer-section.component";
import { MainSectionComponent } from "../../sections/main-section/main-section.component";

@Component({
  selector: 'main-page',
  imports: [HeaderSectionComponent, FooterSectionComponent, MainSectionComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

}
