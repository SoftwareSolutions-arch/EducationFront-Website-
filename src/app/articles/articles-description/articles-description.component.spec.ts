import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesDescriptionComponent } from './articles-description.component';

describe('ArticlesDescriptionComponent', () => {
  let component: ArticlesDescriptionComponent;
  let fixture: ComponentFixture<ArticlesDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticlesDescriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
