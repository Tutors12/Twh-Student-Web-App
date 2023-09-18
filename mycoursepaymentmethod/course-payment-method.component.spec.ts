import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursePaymentMethodComponent } from './course-payment-method.component';

describe('CoursePaymentMethodComponent', () => {
  let component: CoursePaymentMethodComponent;
  let fixture: ComponentFixture<CoursePaymentMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CoursePaymentMethodComponent]
    });
    fixture = TestBed.createComponent(CoursePaymentMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
