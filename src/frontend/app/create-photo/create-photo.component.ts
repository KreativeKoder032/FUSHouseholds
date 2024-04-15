import { Component } from '@angular/core';
import { Photo } from '../../../models/photo';
import { PhotoService } from '../services/photo.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ng-create-photo',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-photo.component.html',
  styleUrl: './create-photo.component.css'
})
export class CreatePhotoComponent {
  
  constructor(private photoService: PhotoService, private router: Router) {}

  name: string = "";
  type: string = "";
  active: boolean = false;

  save(): void {
    const toSave: Photo = {
      name: this.name,
      type: this.type,
      //TODO
      //id: 0,
      data: '',
      alternate: '',
      //TODO
      active: this.active,
    }
    
    this.photoService.createPhoto(toSave).subscribe(photo => {
      console.log('Saved ',photo,', returning home.');
      this.router.navigate(['/']);
    })
  }
}
