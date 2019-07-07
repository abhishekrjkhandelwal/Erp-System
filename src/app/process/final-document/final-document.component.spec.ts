import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinalDocumentComponent } from './final-document.component';

describe('FinalDocumentComponent', () => {
  let component: FinalDocumentComponent;
  let fixture: ComponentFixture<FinalDocumentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinalDocumentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinalDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
