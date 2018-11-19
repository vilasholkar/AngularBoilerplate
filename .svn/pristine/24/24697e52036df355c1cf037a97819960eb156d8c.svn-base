import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgProgressModule } from '@ngx-progressbar/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { SidebarModule } from 'ng-sidebar';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
/* imported component */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

/* imported services */
import { InterceptorService } from './service/interceptor/interceptor.service';
import { ApiService } from './service/api/api.service';
import { AuthService } from './service/auth/auth.service';
import { HelperService } from './service/core/helper.service';
import { ConstantService } from './service/core/constant.service';

/* imported module */
import { PrivateModule } from './private/private.module';
import { PublicModule } from './public/public.module';
import { AuthGuardService } from './service/auth-guard/auth-guard.service';
import { LanguageService } from './service/core/language.service';
import { SharedModule } from './shared/shared.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    PagenotfoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NgProgressModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 1250,
    }),
    SidebarModule.forRoot(),
    HttpClientModule,
    PrivateModule,
    PublicModule,
    SharedModule,
    AngularFontAwesomeModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    HelperService,
    ConstantService,
    ApiService,
    AuthService,
    LanguageService,
    AuthGuardService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
