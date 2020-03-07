import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxCommonLayoutComponent } from './box-common-layout.component';

describe('BoxCommonLayoutComponent', () => {
  let component: BoxCommonLayoutComponent;
  let fixture: ComponentFixture<BoxCommonLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxCommonLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxCommonLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
