import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';
import { FormsModule } from '@angular/forms';
import { UserInfoComponent } from '../header/user-info/user-info.component';
import { SearchAreaComponent } from '../header/search-area/search-area.component';
import { SettingsButtonComponent } from '../header/settings-button/settings-button.component';
import { RouterModule } from '@angular/router';
import { SharedModuleModule } from 'src/app/shared/shared-module/shared-module.module';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SearchAreaComponent,
    UserInfoComponent,
    SettingsButtonComponent,
  ],
  imports: [CommonModule, FormsModule, RouterModule, SharedModuleModule],
  exports: [FooterComponent, HeaderComponent],
  providers: [],
})
export class CoreModuleModule {}
