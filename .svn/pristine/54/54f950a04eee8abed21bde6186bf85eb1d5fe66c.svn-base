import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PrivateComponent } from './private/private.component';
import { PrivateModule } from './private/private.module';
import { AuthGuardService as AuthGuard } from './service/auth-guard/auth-guard.service';
import { PublicComponent } from './public/public.component';
import { PublicModule } from './public/public.module';
export function publicModuleLoader() {
  return PublicModule;
}
export function privateModuleLoader() {
  return PrivateModule;
}
const routes: Routes = [
  {
    path: '', component: PublicComponent,
    children: [{
      path: '',
      loadChildren: publicModuleLoader // comment on build
      /* loadChildren: './public/public.module#PublicModule' */ // uncomment on build
      // for lazy loading
    }]
  },
  {
    path: '', component: PrivateComponent,
    children: [{
      path: '',
      loadChildren: privateModuleLoader // comment on build
      /* loadChildren: './private/private.module#PrivateModule' */ // uncomment on build
      // for lazy loading
    }],
    canActivate: [AuthGuard],
    canActivateChild: [AuthGuard]
  },
  { path: '**', component: PagenotfoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
