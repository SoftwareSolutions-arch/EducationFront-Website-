import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NationalBoardComponent } from './national-board.component';

describe('NationalBoardComponent', () => {
  let component: NationalBoardComponent;
  let fixture: ComponentFixture<NationalBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NationalBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NationalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
