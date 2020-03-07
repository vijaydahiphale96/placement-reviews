import { TestBed } from '@angular/core/testing';

import { CommonMatDialogService } from './common-mat-dialog.service';

describe('CommonMatDialogService', () => {
  let service: CommonMatDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonMatDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
