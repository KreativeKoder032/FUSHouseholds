import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateHouseholdComponent } from './create-household.component';

describe('CreateHouseholdComponent', () => {
  let component: CreateHouseholdComponent;
  let fixture: ComponentFixture<CreateHouseholdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHouseholdComponent, HttpClientTestingModule ]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateHouseholdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask for a name', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.name).toBeDefined();
  })
  it('should ask for a year', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.year).toBeDefined();
  })
  it('should ask for a location', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.location).toBeDefined();
  })
  it('should ask for a verse', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.verse).toBeDefined();
  })
  it('should ask for a covenant', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.covenant).toBeDefined();
  })
  it('should ask for a big/little title', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.big_little_title).toBeDefined();
  })
  /*it('should ask for a sibling household', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.sibling_household).toBeDefined();
  })*/
  it('should ask for a description', () => {
    const fixture = TestBed.createComponent(CreateHouseholdComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.householdForm.value.description).toBeDefined();
  })
});
