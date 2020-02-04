import { TestBed } from '@angular/core/testing';

import { CanvasMgrService } from './canvas-mgr-service';

describe('CanvasMgrService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasMgrService = TestBed.get(CanvasMgrService);
    expect(service).toBeTruthy();
  });
});
