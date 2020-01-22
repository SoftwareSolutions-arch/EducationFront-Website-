import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalCollegeComponent } from './medical-college.component';

describe('MedicalCollegeComponent', () => {
  let component: MedicalCollegeComponent;
  let fixture: ComponentFixture<MedicalCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedicalCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
