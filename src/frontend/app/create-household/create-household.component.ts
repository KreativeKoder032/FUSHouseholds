import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Household } from '../../../models/household';
import { HouseholdService } from '../services/household.service';
import { HouseholdSelectorComponent } from '../household-selector/household-selector.component'

@Component({
  selector: 'ng-create-household',
  standalone: true,
  imports: [ReactiveFormsModule, HouseholdSelectorComponent],
  templateUrl: './create-household.component.html',
  styleUrl: './create-household.component.css'
})
export class CreateHouseholdComponent {

  constructor(private householdService: HouseholdService, private router: Router) {}
  householdForm = new FormGroup({
    name: new FormControl('', Validators.required),
    sex: new FormControl('', Validators.required),
    active: new FormControl<boolean>(true,Validators.required),
    year: new FormControl<string>('', Validators.required),
    location: new FormControl('', Validators.required),
    verse: new FormControl('', Validators.required),
    sibling_household_name: new FormControl(''),
    covenant: new FormControl('', Validators.required),
    big_little_title: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  })

  save(): void {
    if (!this.householdForm.value.name) {
      throw "Household name is required.";
    }
    if (!this.householdForm.value.sex) {
      throw "Household sex is required.";
    }
    if (!this.householdForm.value.year) {
      throw "Household year is required.";
    }
    if (!this.householdForm.value.active) {
      throw "Household active is required.";
    }
    if (!this.householdForm.value.verse) {
      throw "Household verse is required.";
    }
    if (!this.householdForm.value.covenant) {
      throw "Household covenant is required.";
    }
    const toSave: Household = {
      name: this.householdForm.value.name,
      sex: this.householdForm.value.sex,
      year: parseInt(this.householdForm.value.year),
      active: this.householdForm.value.active,
      verse: this.householdForm.value.verse,
      covenant: this.householdForm.value.covenant,
    }

    if (this.householdForm.value.location) {
      toSave.location = this.householdForm.value.location;
    }
    if (this.householdForm.value.big_little_title) {
      toSave.big_little_title = this.householdForm.value.big_little_title;
    }
    
    if (this.householdForm.value.description) {
      toSave.description = this.householdForm.value.description;
    }
    if (this.householdForm.value.sex == "male" || this.householdForm.value.sex == "female") {
      this.householdService.createHousehold(toSave).subscribe(household => {
        console.log('Saved ',household,', returning home.');
        this.router.navigate(['/']);
      })
    }
    else {
      console.log("Please specify the sex associated with the Household. ", this.householdForm.value.sex, " is an invalid input")
    }
  }
}
