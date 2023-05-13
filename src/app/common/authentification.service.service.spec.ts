import { TestBed } from '@angular/core/testing';

import { AuthService } from './authentification.service.service';

describe('AuthentificationServiceService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
