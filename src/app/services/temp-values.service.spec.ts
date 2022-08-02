import { TestBed } from '@angular/core/testing';

import { TempValuesService } from './temp-values.service';

describe('TempConfirmNumService', () => {
  let service: TempValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TempValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
