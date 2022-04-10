import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainPageComponent } from './youtube/main-page/main-page.component';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './youtube/error-page/error-page.component';
import { DetailedPageComponent } from './youtube/detailed-page/detailed-page.component';
import { AuthGuardService } from './auth/services/auth-guard.service';


const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  {
    path: 'main', component: MainPageComponent, canActivate: [AuthGuardService], children: [
      { path: ':id/:title', component: DetailedPageComponent },
    ]
  },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
