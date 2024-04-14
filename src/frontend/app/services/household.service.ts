import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Household } from '../../../models/household';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {

  //private url = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  createHousehold(household: Household): Observable<Household> {
    return this.http.post<Household>("/api/households/create", household);
  }

  getHouseholds(): Observable<Household[]> {
    return this.http.get<Household[]>("/api/households/")
  }
  findHouseholds(query: string): Observable<Household[]> {
    return this.http.get<Household[]>(`/api/households/search?q=${query}`);
  }
}
