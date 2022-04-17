import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';


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
    RouterModule.forChild(routes)

  ],
  exports: [
    AuthComponent,
    RouterModule]
})
export class AuthModuleModule { }
