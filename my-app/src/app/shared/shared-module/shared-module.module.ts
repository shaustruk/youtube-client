import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogStatusDirective } from '../log-status.directive';
import { PasswordValidatorDirective } from '../validator.directive';



@NgModule({
  declarations: [
    LogStatusDirective,
    PasswordValidatorDirective],
  imports: [
    CommonModule,
  ],
  exports: [
    LogStatusDirective,
    PasswordValidatorDirective]
})
export class SharedModuleModule { }
