import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-components/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchAreaComponent } from './header-components/search-area/search-area.component';
import { UserInfoComponent } from './header-components/user-info/user-info.component';
import { SortsSearchAreaComponent } from './sorts-search-area/sorts-search-area.component';
import { SearchItemComponent } from './header-components/search-item/search-item.component';
import { SearchResultsComponent } from './header-components/search-results/search-results.component';
import { SettingsButtonComponent } from './header-components/settings-button/settings-button.component';
import { MaterialModule } from './material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ListCardsComponent } from './list-cards/list-cards.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SearchAreaComponent,
    UserInfoComponent,
    SortsSearchAreaComponent,
    SearchItemComponent,
    SearchResultsComponent,
    SettingsButtonComponent,
    ListCardsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
