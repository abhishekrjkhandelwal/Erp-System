import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientLogComponent } from './client-log.component';

describe('ClientLogComponent', () => {
  let component: ClientLogComponent;
  let fixture: ComponentFixture<ClientLogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientLogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientLogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
