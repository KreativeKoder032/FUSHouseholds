import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { News } from '../../../models/news';
import { NewsService } from '../services/news.service';


@Component({
  selector: 'ng-list-news',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-news.component.html',
  styleUrl: './list-news.component.css'
})
export class ListNewsComponent implements OnInit {
  constructor(private newsService: NewsService) {}
  selectedNews?: News;
  newsli: News[] = [];

  ngOnInit(): void {
    this.getNewsli();
  }

  getNewsli(): void {
    this.newsService.getNewsli().subscribe(newsli => this.newsli = newsli);
  }
}
