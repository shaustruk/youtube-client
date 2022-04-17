import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CoreModuleModule } from './core/core-module/core-module.module';
import { AppRoutingModule } from './app-routing.module';
import { LogStatusDirective } from './shared/log-status.directive';

@NgModule({
  declarations: [
    AppComponent,
    LogStatusDirective,
  ],
  imports: [
    BrowserModule,
    MaterialModule,
    BrowserAnimationsModule,
    CoreModuleModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
