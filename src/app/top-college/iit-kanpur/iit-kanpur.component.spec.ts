import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IitKanpurComponent } from './iit-kanpur.component';

describe('IitKanpurComponent', () => {
  let component: IitKanpurComponent;
  let fixture: ComponentFixture<IitKanpurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IitKanpurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IitKanpurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
