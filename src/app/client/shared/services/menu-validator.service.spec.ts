import { TestBed } from '@angular/core/testing';

import { MenuValidatorService } from './menu-validator.service';

describe('MenuValidatorService', () => {
  let service: MenuValidatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MenuValidatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
