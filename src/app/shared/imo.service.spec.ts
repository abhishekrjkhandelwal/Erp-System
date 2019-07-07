import { TestBed } from '@angular/core/testing';

import { ImoService } from './imo.service';

describe('ImoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImoService = TestBed.get(ImoService);
    expect(service).toBeTruthy();
  });
});
