import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoriteGroupClassComponent } from './favorite-group-class.component';

describe('FavoriteGroupClassComponent', () => {
  let component: FavoriteGroupClassComponent;
  let fixture: ComponentFixture<FavoriteGroupClassComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FavoriteGroupClassComponent]
    });
    fixture = TestBed.createComponent(FavoriteGroupClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
