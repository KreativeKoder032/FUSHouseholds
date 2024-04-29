import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Photo } from '../../../models/photo';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'ng-list-photos',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-photos.component.html',
  styleUrl: './list-photos.component.css'
})
export class ListPhotosComponent implements OnInit {
  constructor(private photoService: PhotoService) {}
  selectedPhoto?: Photo;
  photos: Photo[] = [];

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.getPhotos().subscribe(photos => this.photos = photos);
  }
}