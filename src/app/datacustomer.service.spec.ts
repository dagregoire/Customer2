import { TestBed } from '@angular/core/testing';

import { DatacustomerService } from './datacustomer.service';

describe('DatacustomerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatacustomerService = TestBed.get(DatacustomerService);
    expect(service).toBeTruthy();
  });
});
