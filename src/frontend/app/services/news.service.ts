import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../../../models/news';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  nextId = 1;
  newsli: News[] = [];
  constructor(private http: HttpClient) { }
  createNews(news: News): Observable<News> {
    news.news_id = this.nextId++;
    this.newsli.push(news);
    console.log(this.nextId)

    return this.http.post<News>("/api/news/create", news);
}

  getNewsli(): Observable<News[]> {
    return this.http.get<News[]>("/api/news/")
  }

  findNews(query: string): Observable<News[]> {
    return this.http.get<News[]>(`/api/households/search?q=${query}`);
  }

}
