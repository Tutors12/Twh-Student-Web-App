import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonInformationComponent } from './lesson-information.component';

describe('LessonInformationComponent', () => {
  let component: LessonInformationComponent;
  let fixture: ComponentFixture<LessonInformationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LessonInformationComponent]
    });
    fixture = TestBed.createComponent(LessonInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
