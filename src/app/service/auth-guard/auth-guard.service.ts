import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router } from '@angular/router';
import { ConstantService } from '../core/constant.service';
import { HelperService } from '../core/helper.service';
import { AuthService } from '../auth/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanActivateChild {

  constructor(private router: Router,
    private authSvc: AuthService,
    private constantSvc: ConstantService,
    private helperSvc: HelperService) { }
  canActivate() {
    if (this.authSvc.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

  canActivateChild() {
    if (this.authSvc.isAuthenticated()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
