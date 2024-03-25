import { Injectable } from '@angular/core';
import { News } from '../../../models/news';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  nextId = 0;
  constructor() { }
  createNews(news: News): Observable<News> {
    news.news_id = this.nextId++;
    this.news.push(news);

    return of(news);
}
}
