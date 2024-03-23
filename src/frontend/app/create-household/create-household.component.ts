import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ng-create-household',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-household.component.html',
  styleUrl: './create-household.component.css'
})
export class CreateHouseholdComponent {
  name: string = '';
  //TODO: active
  //TODO: logo
  year: string = '';
  location: string = '';
  verse: string = '';
  //TODO: saints
  //TODO: pillars
  //TODO: commitments
  covenant: string = '';
  big_little_title: string = '';
  sibling_household: string = '';
  description: string = '';
  //TODO: photos
  //TODO: aesthetics
  //TODO: news
}
