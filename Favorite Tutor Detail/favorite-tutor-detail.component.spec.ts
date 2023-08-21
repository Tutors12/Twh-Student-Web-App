import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTutorDetailComponent } from './favorite-tutor-detail.component';

describe('FavoriteTutorDetailComponent', () => {
  let component: FavoriteTutorDetailComponent;
  let fixture: ComponentFixture<FavoriteTutorDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTutorDetailComponent]
    });
    fixture = TestBed.createComponent(FavoriteTutorDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
