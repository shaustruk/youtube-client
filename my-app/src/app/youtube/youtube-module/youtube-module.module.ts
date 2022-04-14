import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../main-page/list-cards/list-cards.component';
import { SortsSearchAreaComponent } from '../main-page/sorts-search-area/sorts-search-area.component';
import { FilterDatesPipe } from '../pipes/filter-dates.pipe';
import { FilterViewsPipe } from '../pipes/filter-views.pipe';
import { FilterWordPipe } from '../pipes/filter-word.pipe';
import { BottomColorDirective } from '../directives/bottom-color.directive';
import { DetailedPageComponent } from '../detailed-page/detailed-page.component';
import { MainPageComponent } from '../main-page/main-page-comp/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { MaterialModule } from 'src/app/material.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { ContentContainerComponent } from '../content-container/content-container.component';



@NgModule({
  declarations: [
    SortsSearchAreaComponent,
    MainPageComponent,
    ListCardsComponent,
    FilterWordPipe,
    FilterViewsPipe,
    FilterDatesPipe,
    BottomColorDirective,
    DetailedPageComponent,
    ContentContainerComponent,
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    YoutubeRoutingModule
  ],
  exports: []
})
export class YoutubeModuleModule { }
