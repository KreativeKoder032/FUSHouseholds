import { Injectable } from '@angular/core';
import { Household } from '../../../models/household';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  households: Household[] = [];
  nextId: number = 7;

  constructor() { }

  createHousehold(household: Household): Observable<Household> {
    //TODO: call the webserver
    household.id = this.nextId++;
    this.households.push(household);

    return of(household);
  }
}
