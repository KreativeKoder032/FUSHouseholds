//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Household } from '../../../models/household';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  households: Household[] = [];
  nextId: number = 1;
  //private url = 'http://localhost:3000';

  constructor() { }
  //constructor(private http: HttpClient) { }

  createHousehold(household: Household): Observable<Household> {
    //TODO: call the webserver
    household.id = this.nextId++;
    this.households.push(household);
    console.log(this.nextId)

    return of(household);
  }
  getHouseholds(): Observable<Household[]> {
    return of(this.households);
  }
  /*listHouseholds(query: string): Observable<Household[]> {
    return this.http.get<Household[]>(`${this.url}?q=${query}`);
  }*/
}
