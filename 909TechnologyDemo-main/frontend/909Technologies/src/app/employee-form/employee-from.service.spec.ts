import { TestBed } from '@angular/core/testing';

import { EmployeeFromService } from './employee-from.service';

describe('EmployeeFromService', () => {
  let service: EmployeeFromService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmployeeFromService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
