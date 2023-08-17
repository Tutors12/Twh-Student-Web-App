import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteTutorComponent } from './favorite-tutor.component';

describe('FavoriteTutorComponent', () => {
  let component: FavoriteTutorComponent;
  let fixture: ComponentFixture<FavoriteTutorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteTutorComponent]
    });
    fixture = TestBed.createComponent(FavoriteTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
