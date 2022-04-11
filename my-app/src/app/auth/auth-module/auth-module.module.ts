import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from '../auth.component';
import { FormsModule, NgForm } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,

  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  providers: [
    FormsModule,

  ]
})
export class AuthModuleModule { }
