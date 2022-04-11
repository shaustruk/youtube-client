import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../header/user-info/user-info.component';
import { SearchAreaComponent } from '../header/search-area/search-area.component';
import { SettingsButtonComponent } from '../header/settings-button/settings-button.component';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchAreaComponent,
    UserInfoComponent,
    SettingsButtonComponent,
  ],
  imports: [
    CommonModule,
    FormsModule

  ],
  exports: [
    FooterComponent,
    HeaderComponent
  ]
})
export class CoreModuleModule { }
