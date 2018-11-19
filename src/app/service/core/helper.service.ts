import { Injectable } from '@angular/core';
import { NgProgress } from '@ngx-progressbar/core';
import { ToastrService } from 'ngx-toastr';
import { ConstantService } from './constant.service';
import * as _ from 'underscore';
@Injectable({
  providedIn: 'root'
})
export class HelperService {

  constructor(private progressSvc: NgProgress,
    private toasterSvc: ToastrService,
    private constantSvc: ConstantService
  ) { }

  public loaderStart() {
    this.progressSvc.start();
  }
  public loaderStop() {
    this.progressSvc.complete();
  }
  public notifySuccess(msg: string = null) {
    this.toasterSvc.success(msg);
  }
  public notifyError(msg: string = null) {
    this.toasterSvc.error(msg);
  }
  public lsSetItem(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }

  public lsGetItem(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  public lsRemoveItem(key) {
    return localStorage.removeItem(key);
  }
  public lsClear() {
    return localStorage.clear();
  }
  public errorHandler(error) {
    switch (error.code) {
      case 400:
        this.notifyError(error.detailedMessage);
        break;
      case 401:
        this.notifyError(error.detailedMessage);
        break;
      case 402:
        this.notifyError(error.detailedMessage);
        break;
      case 403:
        this.notifyError(error.detailedMessage);
        break;
      case 404:
        this.notifyError(error.detailedMessage);
        break;
      case 500:
        this.notifyError(this.constantSvc.errMsgConfig.UNKNOWN_ERROR);
        break;
      default:
        this.notifyError(this.constantSvc.errMsgConfig.UNKNOWN_ERROR);
        break;
    }
  }

  public isEqual(obj1, obj2) {
    return _.isEqual(obj1, obj2);
  }
}
