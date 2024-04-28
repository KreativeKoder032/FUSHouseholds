import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ManagePhotosComponent } from './manage-photos.component';

describe('ManagePhotosComponent', () => {
  let component: ManagePhotosComponent;
  let fixture: ComponentFixture<ManagePhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ManagePhotosComponent, HttpClientTestingModule]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ManagePhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});