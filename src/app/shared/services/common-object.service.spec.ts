import { TestBed } from '@angular/core/testing';

import { CommonObjectService } from './common-object.service';

describe('CommonObjectService', () => {
  let service: CommonObjectService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CommonObjectService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
