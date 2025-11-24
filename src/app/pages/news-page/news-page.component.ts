import { Component, computed, inject, signal } from '@angular/core';
import { NewsService } from '../../services/news.service';
import { RouterLink } from '@angular/router';
import { News } from '../../interfaces/news.interface';
import { NewCardLoaderComponent } from "./components/new-card-loader/new-card-loader.component";

@Component({
  selector: 'app-news-page',
  imports: [RouterLink, NewCardLoaderComponent],
  templateUrl: './news-page.component.html',
})
export class NewsPageComponent {
  //Se inyecta servicio de noticias
  newsService = inject(NewsService);


  newsDataGetter = computed<News[] | null | undefined>(()=>{
    console.log(this.newsService.newsResource.value());
    if(!this.newsService.newsResource.value()){
      return [];
    }
    return this.newsService.newsResource.value();
  })




}
