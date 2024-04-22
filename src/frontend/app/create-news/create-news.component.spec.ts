import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CreateNewsComponent } from './create-news.component';

describe('CreateNewsComponent', () => {
  let component: CreateNewsComponent;
  let fixture: ComponentFixture<CreateNewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateNewsComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
