import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Household } from '../../../models/household';
import { HouseholdService } from '../services/household.service';
import { HouseholdSelectorComponent } from '../household-selector/household-selector.component'

@Component({
  selector: 'ng-create-household',
  standalone: true,
  imports: [FormsModule, HouseholdSelectorComponent],
  templateUrl: './create-household.component.html',
  styleUrl: './create-household.component.css'
})
export class CreateHouseholdComponent {

  constructor(private householdService: HouseholdService, private router: Router) {}

  name: string = '';
  //TODO: logo
  active: boolean = true;
  sex: string = '';
  year: string = '';
  location: string = '';
  verse: string = '';
  siblingId: number | null = null;
  //TODO: saints
  //TODO: pillars
  //TODO: commitments
  covenant: string = '';
  big_little_title: string = '';
  household_name: string = '';
  sibling_household: Household | null = null;
  description: string = '';
  //TODO: photos
  //TODO: aesthetics
  //TODO: news

  save(): void {
    const toSave: Household = {
      name: this.name,
      sex: this.sex,
      year: parseInt(this.year),
      active: this.active,
      verse: this.verse,
      covenant: this.covenant,
    }

    if (this.location) {
      toSave.location = this.location;
    }
    if (this.big_little_title) {
      toSave.big_little_title = this.big_little_title;
    }
    if (this.siblingId) {
      toSave.siblingId = this.siblingId;
    }
    if (this.description) {
      toSave.description = this.description;
    }
    if (this.sex == "male" || this.sex == "female") {
      this.householdService.createHousehold(toSave).subscribe(household => {
        console.log('Saved ',household,', returning home.');
        this.router.navigate(['/']);
      })
    }
    else {
      console.log("Please specify the sex associated with the Household. ", this.sex, " is an invalid input")
    }
  }
}
