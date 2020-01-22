import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCollegeComponent } from './top-college.component';

describe('TopCollegeComponent', () => {
  let component: TopCollegeComponent;
  let fixture: ComponentFixture<TopCollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopCollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopCollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
