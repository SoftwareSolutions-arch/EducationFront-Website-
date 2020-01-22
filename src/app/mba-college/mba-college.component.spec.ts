import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MbaCollegeComponent } from './mba-college.component';

describe('MbaCollegeComponent', () => {
  let component: MbaCollegeComponent;
  let fixture: ComponentFixture<MbaCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MbaCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MbaCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
