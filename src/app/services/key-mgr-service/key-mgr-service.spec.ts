import { TestBed } from '@angular/core/testing';

import { KeyMgrService } from './key-mgr-service';

describe('KeyMgrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: KeyMgrService = TestBed.get(KeyMgrService);
    expect(service).toBeTruthy();
  });
});
