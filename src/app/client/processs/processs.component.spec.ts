import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesssComponent } from './processs.component';

describe('ProcesssComponent', () => {
  let component: ProcesssComponent;
  let fixture: ComponentFixture<ProcesssComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesssComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
