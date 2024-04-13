import { Injectable } from '@angular/core';
import { News } from '../../../models/news';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  nextId = 1;
  newsli: News[] = [];
  constructor() { }
  createNews(news: News): Observable<News> {
    news.news_id = this.nextId++;
    this.newsli.push(news);
    console.log(this.nextId)

    return of(news);
}
  getNewsli(): Observable<News[]> {
    return of(this.newsli);
  }
}
