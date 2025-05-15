import { Component } from '@angular/core';
import { HeaderSectionComponent } from "../../sections/header-section/header-section.component";
import { BodyComponent } from "../../sections/body/body.component";
import { FooterSectionComponent } from "../../sections/footer-section/footer-section.component";

@Component({
  selector: 'main-page',
  imports: [HeaderSectionComponent, BodyComponent, FooterSectionComponent],
  templateUrl: './main-page.component.html',
})
export class MainPageComponent {

}
