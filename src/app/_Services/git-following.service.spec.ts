import { TestBed } from '@angular/core/testing';

import { GitFollowingService } from './git-following.service';

describe('GitFollowingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitFollowingService = TestBed.get(GitFollowingService);
    expect(service).toBeTruthy();
  });
});
