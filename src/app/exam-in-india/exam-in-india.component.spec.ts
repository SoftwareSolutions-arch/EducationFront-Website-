import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExamInIndiaComponent } from './exam-in-india.component';

describe('ExamInIndiaComponent', () => {
  let component: ExamInIndiaComponent;
  let fixture: ComponentFixture<ExamInIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExamInIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExamInIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
