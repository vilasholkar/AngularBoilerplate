import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Observer } from 'rxjs';
import { ConstantService } from '../core/constant.service';
import { HelperService } from '../core/helper.service';
@Injectable()
export class ApiService {
  constructor(private http: HttpClient,
    private constantSvc: ConstantService,
    private helperSvc: HelperService) {

  }

  postService(url, data = null): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.post(this.constantSvc.APIBaseURL + url, data)
        .subscribe(
          res => {
            observer.next(res);
            observer.complete();
            this.helperSvc.loaderStop();
          },
          err => {
            this.helperSvc.errorHandler(err.error);
            observer.error(err);
            observer.complete();
            this.helperSvc.loaderStop();
          }
        );
    });

  }
  getService(url, params = null): Observable<any> {
    return new Observable<any>((observer: Observer<any>) => {
      this.helperSvc.loaderStart();
      this.http.get(this.constantSvc.APIBaseURL + url).subscribe((res) => {
        observer.next(res);
        observer.complete();
        this.helperSvc.loaderStop();
      },
        (err) => {
          this.helperSvc.errorHandler(err.error);
          observer.complete();
          this.helperSvc.loaderStop();
        }
      );
    });

  }
}
