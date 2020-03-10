import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteReviewPageComponent } from './write-review-page.component';

describe('WriteReviewPageComponent', () => {
  let component: WriteReviewPageComponent;
  let fixture: ComponentFixture<WriteReviewPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WriteReviewPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteReviewPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
