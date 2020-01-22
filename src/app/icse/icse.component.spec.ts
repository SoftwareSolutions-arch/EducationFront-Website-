import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcseComponent } from './icse.component';

describe('IcseComponent', () => {
  let component: IcseComponent;
  let fixture: ComponentFixture<IcseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IcseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IcseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
