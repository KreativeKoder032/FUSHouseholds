import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Household } from '../../../models/household';
import { HouseholdService } from '../services/household.service';

@Component({
  selector: 'ng-create-household',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-household.component.html',
  styleUrl: './create-household.component.css'
})
export class CreateHouseholdComponent {

  constructor(private householdService: HouseholdService, private router: Router) {}

  name: string = '';
  //TODO: logo
  //TODO: active
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

  save(): void {
    let toSave: Household = {
      name: this.name,
      year: parseInt(this.year),
      active: true, //temporary
      verse: this.verse,
      covenant: this.covenant,
    }
    if (this.location) {
      toSave.location = this.location;
    }
    if (this.big_little_title) {
      toSave.big_little_title = this.big_little_title;
    }
    /*if (this.sibling_household) {
      toSave.sibling_household = this.sibling_household;
    }*/
    if (this.description) {
      toSave.description = this.description;
    }
  }
}
