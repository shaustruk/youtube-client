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
import { ErrorPageComponent } from '../error-page/error-page.component';
import { MaterialModule } from 'src/app/material.module';
import { YoutubeRoutingModule } from './youtube-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminPageComponent } from '../admin-page/admin-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';
import { environment } from 'src/environments/environment';
import { cardsReducer } from 'src/app/redux/reducers/reducer';
import { cardsEffects } from 'src/app/redux';

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
    ErrorPageComponent,
    AdminPageComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    YoutubeRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature('cardsState', cardsReducer),
    EffectsModule.forFeature([cardsEffects]),
  ],
  exports: [],
})
export class YoutubeModuleModule {}
