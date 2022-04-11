import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListCardsComponent } from '../main-page/list-cards/list-cards.component';
import { SortsSearchAreaComponent } from '../main-page/sorts-search-area/sorts-search-area.component';
import { FilterDatesPipe } from '../pipes/filter-dates.pipe';
import { FilterViewsPipe } from '../pipes/filter-views.pipe';
import { FilterWordPipe } from '../pipes/filter-word.pipe';
import { BottomColorDirective } from '../directives/bottom-color.directive';
import { DetailedPageComponent } from '../detailed-page/detailed-page.component';
import { MainPageComponent } from '../main-page/main-page.component';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from 'src/app/auth/services/auth-guard.service';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { MaterialModule } from 'src/app/material.module';

const appRoutes: Routes = [
  { path: '', component: MainPageComponent, canActivate: [AuthGuardService] },
  { path: 'details/:id/:title', component: DetailedPageComponent, canActivate: [AuthGuardService] },
  { path: '**', component: ErrorPageComponent },
];

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
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild(appRoutes)
  ],
  exports: [
    RouterModule,
    ErrorPageComponent

  ]
})
export class YoutubeModuleModule { }
