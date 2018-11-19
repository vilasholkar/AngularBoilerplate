import { Injectable } from '@angular/core';
import { Observer, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api/api.service';
import { HelperService } from '../../../service/core/helper.service';
import { ConstantService } from '../../../service/core/constant.service';
@Injectable({
  providedIn: 'root'
})
export class InternalService {

  constructor(

    private router: Router,
    private apiSvc: ApiService,
    private helperSvc: HelperService,
    private constantSvc: ConstantService
  ) { }


}
