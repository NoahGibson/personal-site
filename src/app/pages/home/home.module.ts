import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {HomePageComponent} from './home-page.component';
import {HomeHeaderComponent} from './components/home-header/home-header.component';
import {HeaderOptionComponent} from '@app/pages/home/components/header-option/header-option.component';
import {HeaderBrandingComponent} from '@app/pages/home/components/header-branding/header-branding.component';
import {MatIconModule} from '@angular/material';
import {HttpClientModule} from '@angular/common/http';

import {SharedModule} from '@app/shared';

@NgModule({
  declarations: [
    HomePageComponent,
    HomeHeaderComponent,
    HeaderBrandingComponent,
    HeaderOptionComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePageComponent
      }
    ]),
    HttpClientModule,
    MatIconModule,
    SharedModule
  ],
  exports: []
})
export class HomeModule {}
