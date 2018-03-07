// import { TestBed, inject } from '@angular/core/testing';

// import { AuthGuardService } from './auth-guard.service';

// describe('AuthGuardService', () => {
//   beforeEach(() => {
//     TestBed.configureTestingModule({
//       providers: [AuthGuardService]
//     });
//   });

//   it('should be created', inject([AuthGuardService], (service: AuthGuardService) => {
//     expect(service).toBeTruthy();
//   }));
// });
import { TestBed, inject } from '@angular/core/testing';

import { AuthGuard } from './auth-guard.service';

describe('AuthGuardService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGuard]
    });
  });

  it('should be created', inject([AuthGuard], (service: AuthGuard) => {
    expect(service).toBeTruthy();
  }));
});
