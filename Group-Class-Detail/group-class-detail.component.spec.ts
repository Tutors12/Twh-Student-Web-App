import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupClassDetailComponent } from './group-class-detail.component';

describe('GroupClassDetailComponent', () => {
  let component: GroupClassDetailComponent;
  let fixture: ComponentFixture<GroupClassDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GroupClassDetailComponent]
    });
    fixture = TestBed.createComponent(GroupClassDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
