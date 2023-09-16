import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseClickingTitleComponent } from './course-clicking-title.component';

describe('CourseClickingTitleComponent', () => {
  let component: CourseClickingTitleComponent;
  let fixture: ComponentFixture<CourseClickingTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CourseClickingTitleComponent]
    });
    fixture = TestBed.createComponent(CourseClickingTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
