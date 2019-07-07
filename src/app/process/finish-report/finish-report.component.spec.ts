import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinishReportComponent } from './finish-report.component';

describe('FinishReportComponent', () => {
  let component: FinishReportComponent;
  let fixture: ComponentFixture<FinishReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinishReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinishReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
