import { TestBed } from '@angular/core/testing';

import { MouseMgrService } from './mouse-mgr-service';

describe('MouseMgrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MouseMgrService = TestBed.get(MouseMgrService);
    expect(service).toBeTruthy();
  });
});
