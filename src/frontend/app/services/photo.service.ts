import { Injectable } from '@angular/core';
import { Photo } from '../../../models/photo';
import { Observable, of } from 'rxjs';
import { InvalidCookieSignature } from 'elysia';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photos: Photo[] = [];
  nextId: number = 1;

  createPhoto(photo: Photo): Observable<Photo> {
    //TODO: test input validation
    //TODO: call the webserver
    photo.id = this.nextId++;
    this.photos.push(photo);
    console.log(this.nextId)

    return of(photo);
  }
  // getPhotos(): Observable<Photo[]> {
  //   return of(this.photos);
  // }
  constructor() { }
}
