import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycourseEyeActionComponent } from './mycourse-eye-action.component';

describe('MycourseEyeActionComponent', () => {
  let component: MycourseEyeActionComponent;
  let fixture: ComponentFixture<MycourseEyeActionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycourseEyeActionComponent]
    });
    fixture = TestBed.createComponent(MycourseEyeActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
