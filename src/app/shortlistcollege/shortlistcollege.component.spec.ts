import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShortlistcollegeComponent } from './shortlistcollege.component';

describe('ShortlistcollegeComponent', () => {
  let component: ShortlistcollegeComponent;
  let fixture: ComponentFixture<ShortlistcollegeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShortlistcollegeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShortlistcollegeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
