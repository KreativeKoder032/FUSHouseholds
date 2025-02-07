import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../../../models/photo';
import { Observable } from 'rxjs';
//import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>("/api/photos/create", photo);
  }
  getPhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>("/api/photos/")
  }
  managePhotos(): Observable<Photo[]> {
    return this.http.get<Photo[]>("/api/photos/manage")
  }
  updatePhotos(photos: Photo[]): Observable<Photo[]> {
    return this.http.patch<Photo[]>("/api/photos/update", photos);
  }
}
