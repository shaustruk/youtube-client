import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorPageComponent } from './youtube/error-page/error-page.component';
import { AuthModuleModule } from './auth/auth-module/auth-module.module';
import { CoreModuleModule } from './core/core-module/core-module.module';
import { YoutubeModuleModule } from './youtube/youtube-module/youtube-module.module';

@NgModule({
  declarations: [
    AppComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    AuthModuleModule,
    CoreModuleModule,
    YoutubeModuleModule
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
