import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingdataComponent } from './billingdata.component';

describe('BillingdataComponent', () => {
  let component: BillingdataComponent;
  let fixture: ComponentFixture<BillingdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
