import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { LogStatusDirective } from 'src/app/shared/log-status.directive';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { MaterialModule } from 'src/app/material.module';


const routes: Routes = [
  { path: '', component: AuthComponent },
];
@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    SharedModuleModule,
    MaterialModule


  ],
  exports: [
    AuthComponent,
    RouterModule]
})
export class AuthModuleModule { }
