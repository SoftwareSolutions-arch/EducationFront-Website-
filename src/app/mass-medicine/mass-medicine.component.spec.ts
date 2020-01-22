import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MassMedicineComponent } from './mass-medicine.component';

describe('MassMedicineComponent', () => {
  let component: MassMedicineComponent;
  let fixture: ComponentFixture<MassMedicineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MassMedicineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MassMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
