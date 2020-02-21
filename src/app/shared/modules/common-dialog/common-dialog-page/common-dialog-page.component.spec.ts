import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDialogPageComponent } from './common-dialog-page.component';

describe('CommonDialogPageComponent', () => {
  let component: CommonDialogPageComponent;
  let fixture: ComponentFixture<CommonDialogPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonDialogPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonDialogPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
