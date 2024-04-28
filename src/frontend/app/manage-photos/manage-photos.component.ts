import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Photo } from '../../../models/photo';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'ng-manage-photos',
  standalone: true,
  imports: [NgFor, FormsModule],
  templateUrl: './manage-photos.component.html',
  styleUrl: './manage-photos.component.css'
})
export class ManagePhotosComponent implements OnInit {
  constructor(private photoService: PhotoService, private router: Router) {}

  photos: Photo[] = [];
  // name: string = "";
  // description: string = "";
  // alternate: string = "";

  update(): void {

    const toSave: Photo[] = [];
    this.photos.forEach(item => {
      const photo: Photo = {
        id: item.id,
        active: item.active,
      }
      toSave.push(photo)
    }); 
    this.photoService.updatePhotos(toSave).subscribe(() => {
      console.log('Updated photos, returning home.');
      this.router.navigate(['/']);
    })
  }

  ngOnInit(): void {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photoService.managePhotos().subscribe(photos => this.photos = photos);
  }
}