import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListHouseholdsComponent } from './list-households.component';

describe('ListHouseholdsComponent', () => {
  let component: ListHouseholdsComponent;
  let fixture: ComponentFixture<ListHouseholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHouseholdsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListHouseholdsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
