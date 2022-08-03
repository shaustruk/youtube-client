import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { ErrorPageComponent } from './youtube/error-page/error-page.component';
import { AdminPageComponent } from './youtube/admin-page/admin-page.component';
import { AuthProtectGuard } from './auth/services/auth-protect.guard';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () =>
      import('./auth/auth-module/auth-module.module').then(
        (m) => m.AuthModuleModule
      ),
    canActivate: [AuthProtectGuard],
  },
  {
    path: 'main',
    loadChildren: () =>
      import('./youtube/youtube-module/youtube-module.module').then(
        (m) => m.YoutubeModuleModule
      ),
    canActivate: [AuthGuardService],
  },
  {
    path: 'admin',
    component: AdminPageComponent,
    canActivate: [AuthGuardService],
  },
  { path: '**', component: ErrorPageComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
