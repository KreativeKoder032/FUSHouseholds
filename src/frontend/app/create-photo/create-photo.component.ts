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
  photofile: File | null = null;

  save(): void {

    let uintArray: Uint8Array | null = null; 
    let fileReader = new FileReader;

    fileReader.onload = (event) => {
      const encodedImage = fileReader.result as String;
      //const uintArray = new Uint8Array(arrayBuffer);
      
      // 'uintArray' now contains the byte array representation of the file
      console.log(encodedImage);

      const toSave: Photo = {
        name: this.name,
        type: this.type,
        //TODO
        //id: 0,
        data: encodedImage,
        alternate: '',
        //TODO
        active: this.active,
      }
      // alert(toSave.name);
      this.photoService.createPhoto(toSave).subscribe(photo => {
        console.log('Saved ',photo,', returning home.');
        this.router.navigate(['/']);
      })
    };
    if (this.photofile) {    
      fileReader.readAsDataURL(this.photofile); 
    }
  } 
  onfileselected(event : any): void {
    this.photofile = event.target.files[0];
  }
}