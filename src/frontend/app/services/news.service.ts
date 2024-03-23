import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  nextId number = 0;
  constructor() { }
  createNews(news: News): Observable<News> {
    news.id = this.nextId++;
    this.news.push(news);

    return of(news);
}
}
