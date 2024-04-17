import { Component, OnInit } from '@angular/core';
import { NgFor } from '@angular/common';
import { Household } from '../../../models/household';
import { HouseholdService } from '../services/household.service';

@Component({
  selector: 'ng-list-households',
  standalone: true,
  imports: [NgFor],
  templateUrl: './list-households.component.html',
  styleUrl: './list-households.component.css'
})
export class ListHouseholdsComponent implements OnInit {
  constructor(private householdService: HouseholdService) {}
  selectedHousehold?: Household;
  households: Household[] = [];

  ngOnInit(): void {
    this.getHouseholds();
  }

  getHouseholds(): void {
    this.householdService.getHouseholds().subscribe(households => this.households = households);
  }
}