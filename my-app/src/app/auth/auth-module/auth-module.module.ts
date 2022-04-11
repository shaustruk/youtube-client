import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: '', component: AuthComponent },
  { path: 'main', loadChildren: () => import('../../youtube/youtube-module/youtube-module.module').then(m => m.YoutubeModuleModule) },
]

@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    FormsModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AuthModuleModule { }
