import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/* routing module */
import { PublicRoutingModule } from './public-routing.module';
/* child components */
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { LoginComponent } from './login/login.component';
import { PublicComponent } from './public.component';
import { NgxPhoneSelectModule } from 'ngx-phone-select';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPhoneSelectModule,
    SharedModule
  ],
  declarations: [
    ForgotPasswordComponent,
    LoginComponent,
    PublicComponent
  ]
})
export class PublicModule { }
