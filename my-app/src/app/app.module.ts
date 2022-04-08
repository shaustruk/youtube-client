import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchAreaComponent } from './core/header/search-area/search-area.component';
import { UserInfoComponent } from './core/header/user-info/user-info.component';
import { SortsSearchAreaComponent } from './youtube/main-page/sorts-search-area/sorts-search-area.component';
import { SettingsButtonComponent } from './core/header/settings-button/settings-button.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ListCardsComponent } from './youtube/main-page/list-cards/list-cards.component';
import { FilterWordPipe } from './youtube/pipes/filter-word.pipe';
import { FilterViewsPipe } from './youtube/pipes/filter-views.pipe';
import { FilterDatesPipe } from './youtube/pipes/filter-dates.pipe';
import { BottomColorDirective } from './youtube/directives/bottom-color.directive';
import { FooterComponent } from './core/footer/footer.component';
import { HeaderComponent } from './core/header/header.component';
import { MainPageComponent } from './youtube/main-page/main-page.component';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth/auth.component';
import { ErrorPageComponent } from './youtube/error-page/error-page.component';
import { DetailedPageComponent } from './youtube/detailed-page/detailed-page.component';

const appRoutes: Routes = [
  { path: 'main', component: MainPageComponent },
  { path: '', component: AuthComponent },
  { path: 'detailed', component: DetailedPageComponent },
  { path: '**', component: ErrorPageComponent },

];

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    SearchAreaComponent,
    UserInfoComponent,
    SortsSearchAreaComponent,
    SettingsButtonComponent,
    ListCardsComponent,
    FilterWordPipe,
    FilterViewsPipe,
    FilterDatesPipe,
    BottomColorDirective,
    FooterComponent,
    MainPageComponent,
    AuthComponent,
    ErrorPageComponent,
    DetailedPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
