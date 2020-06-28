import { TestBed } from '@angular/core/testing';

import { NguMxTableService } from './ngu-mx-table.service';

describe('NguMxTableService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NguMxTableService = TestBed.get(NguMxTableService);
    expect(service).toBeTruthy();
  });
});
