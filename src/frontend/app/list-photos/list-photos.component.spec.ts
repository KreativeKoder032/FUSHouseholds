import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ListPhotosComponent } from './list-photos.component';

describe('ListPhotosComponent', () => {
  let component: ListPhotosComponent;
  let fixture: ComponentFixture<ListPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListPhotosComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});