import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../service/auth/auth.service';
import { HelperService } from '../service/core/helper.service';
import { ConstantService } from '../service/core/constant.service';

@Component({
  selector: 'app-private',
  templateUrl: './private.component.html',
  styleUrls: ['./private.component.scss']
})
export class PrivateComponent implements OnInit {
  public sbConfig = {
    _opened: false,
    _mode: 'slide',
    _position: 'left',
    _closeOnClickOutside: true,
    _closeOnClickBackdrop: true,
    _showBackdrop: false,
    _animate: true,
    _autoFocus: false,
  };
  public userInfo = {
    firstname: null,
    lastname: null,
    email: null,
    telephone: null,
    countryMobileCode: null
  };
  public currentTime;
  constructor(private router: Router,
    private authSvc: AuthService,
    private helperSvc: HelperService,
    private constantSvc: ConstantService) {
  }

  ngOnInit() {
    this.userInfo = this.helperSvc.lsGetItem(this.constantSvc.tokenConfig.USER_INFO);
    this.currentTime = Date.now();
  }

  public _toggleOpened(): void {
    this.sbConfig._opened = !this.sbConfig._opened;
  }
  public logoutUser() {
    this.authSvc.getLogout().subscribe((res) => {
    });
  }
}
