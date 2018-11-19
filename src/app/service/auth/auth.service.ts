import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { ConstantService } from '../core/constant.service';
import { HelperService } from '../core/helper.service';
import { ApiService } from '../api/api.service';
import { Observable, Observer } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private urlHistory = [];
  constructor(private router: Router,
    private constantSvc: ConstantService,
    private helperSvc: HelperService,
    private apiSvc: ApiService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(({ urlAfterRedirects }: NavigationEnd) => {
        this.urlHistory = [...this.urlHistory, urlAfterRedirects];
      });
  }

  public getPreviousState() {
    if (this.urlHistory[this.urlHistory.length - 2]) {
      return this.urlHistory[this.urlHistory.length - 2];
    } else {
      return null;
    }
  }
  public getToken(): string {
    return this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.AUTH_TOKEN);
  }
  public isAuthenticated(): boolean {
    // get the token
    const token = this.getToken();
    if (typeof token !== 'undefined' && token !== null) {
      return true;
    } else {
      return false;
    }
  }

  public handleDirectPublicUrl() {
    if (this.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }
  /* function to authenticate and login the user */
  public getLogin(credentials): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.apiSvc.postService(this.constantSvc.APIConfig.LOGIN, credentials).subscribe((response) => {
        if (response.code === 200 && response.status === true) {
          this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.AUTH_TOKEN, response.session._key);
          this.helperSvc.lsSetItem(this.constantSvc.tokenConfig.USER_INFO, response.data[0].user);
          this.router.navigate(['/dashboard']);
          this.helperSvc.notifySuccess(' Welcome ' + response.data[0].user.firstname + ' ' + response.data[0].user.lastname);
          observer.next(true);
        } else {
          this.helperSvc.errorHandler(response);
          observer.next(false);
        }
        observer.complete();
      },
        (err) => {
          observer.next(false);
          observer.complete();
        }
      );
    });
  }

  /* function to authenticate and logout the user */
  public getLogout(): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.apiSvc.postService(this.constantSvc.APIConfig.LOGOUT).subscribe((response) => {
        if (response.code === 200 && response.status === true) {
          this.helperSvc.notifySuccess(response.detailedMessage);
          observer.next(true);
        } else {
          this.helperSvc.errorHandler(response);
          observer.next(false);
        }
        this.helperSvc.lsClear();
        this.router.navigate(['/login']);
        observer.complete();
      },
        (err) => {
          this.helperSvc.lsClear();
          this.router.navigate(['/login']);
          observer.next(false);
          observer.complete();
        }
      );
    });
  }
}
