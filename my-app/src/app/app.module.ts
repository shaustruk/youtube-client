import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header-components/header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchAreaComponent } from './header-components/search-area/search-area.component';
import { UserInfoComponent } from './header-components/user-info/user-info.component';
import { SortsSearchAreaComponent } from './header-components/sorts-search-area/sorts-search-area.component';
import { SearchResultModelComponent } from './header-components/search-result-model/search-result-model.component';
import { SearchItemModelComponent } from './header-components/search-item-model/search-item-model.component';
import { SearchItemComponent } from './header-components/search-item/search-item.component';
import { SearchResultsComponent } from './header-components/search-results/search-results.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    SearchAreaComponent,
    UserInfoComponent,
    SortsSearchAreaComponent,
    SearchResultModelComponent,
    SearchItemModelComponent,
    SearchItemComponent,
    SearchResultsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
