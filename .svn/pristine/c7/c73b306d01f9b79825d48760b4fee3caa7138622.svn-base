import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth/auth.service';

@Component({
  selector: 'app-public',
  templateUrl: './public.component.html',
  styleUrls: ['./public.component.scss']
})
export class PublicComponent implements OnInit {

  constructor(private AuthSvc: AuthService) {
    this.AuthSvc.handleDirectPublicUrl();
  }

  ngOnInit() {
  }

}
