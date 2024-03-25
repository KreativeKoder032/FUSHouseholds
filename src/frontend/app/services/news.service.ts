import { Injectable } from '@angular/core';
import { News } from '../../../models/news';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  nextId = 1;
  news: News[] = [];
  constructor() { }
  createNews(news: News): Observable<News> {
    news.news_id = this.nextId++;
    this.news.push(news);
    console.log(this.nextId)

    return of(news);
}
}
