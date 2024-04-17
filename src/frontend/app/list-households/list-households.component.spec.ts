import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListHouseholdsComponent } from './list-households.component';

describe('ListHouseholdsComponent', () => {
  let component: ListHouseholdsComponent;
  let fixture: ComponentFixture<ListHouseholdsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListHouseholdsComponent, HttpClientTestingModule]
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