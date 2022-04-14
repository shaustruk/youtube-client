import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthModuleModule } from './auth/auth-module/auth-module.module';
import { CoreModuleModule } from './core/core-module/core-module.module';
import { YoutubeModuleModule } from './youtube/youtube-module/youtube-module.module';
import { YoutubeRoutingModule } from './youtube/youtube-module/youtube-routing.module';
import { AppRoutingModule } from './app-routing.module';




@NgModule({
  declarations: [
    AppComponent,
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
