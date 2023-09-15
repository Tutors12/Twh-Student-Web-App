import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionPendingComponent } from './transaction-pending.component';

describe('TransactionPendingComponent', () => {
  let component: TransactionPendingComponent;
  let fixture: ComponentFixture<TransactionPendingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionPendingComponent]
    });
    fixture = TestBed.createComponent(TransactionPendingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
