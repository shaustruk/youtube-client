import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogStatusDirective } from '../log-status.directive';



@NgModule({
  declarations: [LogStatusDirective,],
  imports: [
    CommonModule,
  ],
  exports: [LogStatusDirective]
})
export class SharedModuleModule { }
