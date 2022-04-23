import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AuthComponent } from './auth/auth.component';
import { MainPageComponent } from './youtube/main-page/main-page-comp/main-page.component';
import { AuthGuardService } from './auth/services/auth-guard.service';
import { DetailedPageComponent } from './youtube/detailed-page/detailed-page.component';
import { ErrorPageComponent } from './youtube/error-page/error-page.component';
import { YoutubeModuleModule } from './youtube/youtube-module/youtube-module.module';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch: 'full' },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth-module/auth-module.module').then(m => m.AuthModuleModule)
  },
  {
    path: 'main',
    loadChildren: () => import('./youtube/youtube-module/youtube-module.module').then(m => m.YoutubeModuleModule),
    canActivate: [AuthGuardService]
  },
  { path: '**', component: ErrorPageComponent },
]

@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes)

  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
