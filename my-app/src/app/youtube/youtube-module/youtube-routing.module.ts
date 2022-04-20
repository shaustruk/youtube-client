import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from '../main-page/main-page-comp/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { DetailedPageComponent } from '../detailed-page/detailed-page.component';
import { AdminPageComponent } from '../admin-page/admin-page.component';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent },
  { path: ':id', component: DetailedPageComponent },
  { path: 'admin', component: AdminPageComponent }
];



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(appRoutes),
  ],
  exports: [RouterModule]
})
export class YoutubeRoutingModule { }
