import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdSelectorComponent } from './household-selector.component';

describe('HouseholdSelectorComponent', () => {
  let component: HouseholdSelectorComponent;
  let fixture: ComponentFixture<HouseholdSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdSelectorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseholdSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});