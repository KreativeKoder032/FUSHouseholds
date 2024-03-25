import { Component } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NewsService } from '../services/news.service';
import { Router } from '@angular/router';
import { News } from '../../../models/news';

@Component({
  selector: 'ng-create-news',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './create-news.component.html',
  styleUrl: './create-news.component.css'
})
export class CreateNewsComponent {
  constructor(private newsService: NewsService, private router: Router) {}
  /*newsForm = new FormGroup({
    news_date: new FormControl(new Date().toISOString().slice(0, 10), Validators.required),
    news_type: new FormControl('', Validators.required),
    news_description: new FormControl('', Validators.required),
  })*/
  news_description: string = "";
  news_type: string = "";
  news_date: Date = new Date();

  save(): void{
    const toSave: News = {
      news_date: this.news_date,
      news_description: this.news_description,
      news_type: this.news_type,
    }
    this.newsService.createNews(toSave).subscribe(news => {
      console.log('Saved ',news,', returning home.');
      this.router.navigate(['/']);
  })
}
}
