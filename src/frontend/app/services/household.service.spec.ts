import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { HouseholdService } from './household.service';
import { CreateHouseholdComponent } from '../create-household/create-household.component';

describe('HouseholdService', () => {
  let service: HouseholdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [CreateHouseholdComponent, HttpClientTestingModule]
    });
    service = TestBed.inject(HouseholdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
