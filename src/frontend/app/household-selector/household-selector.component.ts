import { Component, ViewChild, OnInit } from '@angular/core';
import { Household } from '../../../models/household';
import { Dropdown, DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { HouseholdService } from '../services/household.service';

@Component({
  selector: 'ng-household-selector',
  standalone: true,
  imports: [DropdownModule],
  templateUrl: './household-selector.component.html',
  styleUrl: './household-selector.component.css'
})

export class HouseholdSelectorComponent implements OnInit{
  constructor(private householdService: HouseholdService) {}
  @ViewChild('householdDropdown') householdDropdown?: Dropdown;
  selectedHousehold?: Household;
  households: Household[] = [];

  ngOnInit(): void {
    this.getHouseholds();
  }

  getHouseholds(): void {
    this.householdService.getHouseholds().subscribe(households => this.households = households)
  }
  onChange(event: DropdownChangeEvent) {
    const value=event.value;
    if (typeof value == 'string' && value.length >3) {
      this.householdService.findHouseholds(value)
    }
  }
  onShow() {
    const value = this.householdDropdown?.value;
    this.selectedHousehold = value
    return this.selectedHousehold;
  }
}
