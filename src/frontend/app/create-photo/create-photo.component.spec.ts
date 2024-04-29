import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreatePhotoComponent } from './create-photo.component';

describe('CreatePhotoComponent', () => {
  let component: CreatePhotoComponent;
  let fixture: ComponentFixture<CreatePhotoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatePhotoComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should ask for a name', () => {
    const fixture = TestBed.createComponent(CreatePhotoComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.name).toBeDefined();
  })

  it('should ask for a description', () => {
    const fixture = TestBed.createComponent(CreatePhotoComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.description).toBeDefined();
  })
  
  it('should ask for a alternate', () => {
    const fixture = TestBed.createComponent(CreatePhotoComponent);
    const app = fixture.debugElement.componentInstance;
    expect (app.alternate).toBeDefined();
  })
});
