import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../service/auth/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss', '../public.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(
    private authSvc: AuthService,
    public fb: FormBuilder) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      device: 'web',
    });
  }

  ngOnInit() {
  }

  public onClickSubmit() {
    this.authSvc.getLogin(this.loginForm.value).subscribe((res) => {
      if (res === true) {
        this.loginForm.reset();
      }
    });
  }

}
