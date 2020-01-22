import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EngineeringCollegeComponent } from './engineering-college.component';

describe('EngineeringCollegeComponent', () => {
  let component: EngineeringCollegeComponent;
  let fixture: ComponentFixture<EngineeringCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EngineeringCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EngineeringCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
