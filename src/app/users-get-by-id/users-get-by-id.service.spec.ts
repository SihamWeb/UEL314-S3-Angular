import { TestBed } from '@angular/core/testing';

import { UsersGetByIdService } from './users-get-by-id.service';

describe('UsersGetByIdService', () => {
  let service: UsersGetByIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersGetByIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
