import { Component, inject, OnInit, signal } from '@angular/core';
import { NewsService } from '../../../services/news.service';
import { News } from '../../../interfaces/news.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'individual-new-page',
  imports: [],
  templateUrl: './individual-new-page.component.html',
})
export default class IndividualNewPageComponent implements OnInit{
  //Se inyecta servicio de noticias
  NewsService = inject(NewsService);
  route = inject(ActivatedRoute);

  singleNewsData = signal<News | undefined >(undefined);



  ngOnInit(): void {
    const idRoute:number = parseInt(this.route.snapshot.paramMap.get("id")!);
    this.singleNewsData.set(
      this.NewsService.newsResponse()
      .find((obj)=> obj.id === idRoute))
  }


}
