import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassCommComponent } from './mass-comm.component';

describe('MassCommComponent', () => {
  let component: MassCommComponent;
  let fixture: ComponentFixture<MassCommComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassCommComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassCommComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
