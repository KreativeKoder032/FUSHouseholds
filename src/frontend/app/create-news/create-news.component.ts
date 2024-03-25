import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';

@Component({
  selector: 'ng-create-news',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-news.component.html',
  styleUrl: './create-news.component.css'
})
export class CreateNewsComponent {
  constructor(private newsService: NewsService, private router: Router) {}
  newsDate: string = "";
  newsDescription: string = "";
  newsType: string = "";

  save(): void{
    const toSave: news = {
      newsDate: this.newsDate,
      newsDescription: this.newsDescription,
      newsType: this.newsType,
    }
    this.newsService.createNews(toSave).subscribe(news => {
      console.log('Saved ',news,', returning home.');
      this.router.navigate(['/']);
  })
}
}
