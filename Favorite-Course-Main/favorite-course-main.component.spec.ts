import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteCourseMainComponent } from './favorite-course-main.component';

describe('FavoriteCourseMainComponent', () => {
  let component: FavoriteCourseMainComponent;
  let fixture: ComponentFixture<FavoriteCourseMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteCourseMainComponent]
    });
    fixture = TestBed.createComponent(FavoriteCourseMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
