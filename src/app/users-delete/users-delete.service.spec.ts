import { TestBed } from '@angular/core/testing';

import { UsersDeleteService } from './users-delete.service';

describe('UsersDeleteService', () => {
  let service: UsersDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsersDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
