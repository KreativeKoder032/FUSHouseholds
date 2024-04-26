import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Photo } from '../../../models/photo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(private http: HttpClient) { }

  createPhoto(photo: Photo): Observable<Photo> {
    return this.http.post<Photo>("/api/photos/create", photo);
  }
  getPhoto(): Observable<Photo[]> {
    return this.http.get<Photo[]>("/api/photos/")
  }
}
