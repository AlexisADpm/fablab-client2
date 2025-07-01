import { Component, inject } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-news-page',
  imports: [RouterLink],
  templateUrl: './news-page.component.html',
})
export class NewsPageComponent {
  //Se inyecta servicio de noticias
  NewsService = inject(NewsService);

}
