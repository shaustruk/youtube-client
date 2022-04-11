import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/services/auth-guard.service';
import { DetailedPageComponent } from '../detailed-page/detailed-page.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
