import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCourseDetailComponent } from './favorite-course-detail.component';

describe('FavoriteCourseDetailComponent', () => {
  let component: FavoriteCourseDetailComponent;
  let fixture: ComponentFixture<FavoriteCourseDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteCourseDetailComponent]
    });
    fixture = TestBed.createComponent(FavoriteCourseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
