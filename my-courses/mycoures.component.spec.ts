import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MycouresComponent } from './mycoures.component';

describe('MycouresComponent', () => {
  let component: MycouresComponent;
  let fixture: ComponentFixture<MycouresComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MycouresComponent]
    });
    fixture = TestBed.createComponent(MycouresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
