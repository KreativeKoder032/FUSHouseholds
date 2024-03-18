import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHouseholdComponentComponent } from './create-household-component.component';

describe('CreateHouseholdComponentComponent', () => {
  let component: CreateHouseholdComponentComponent;
  let fixture: ComponentFixture<CreateHouseholdComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdComponentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHouseholdComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
