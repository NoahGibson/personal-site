import {ModuleWithProviders, NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';

import {HeaderComponent} from '@app/core/header/header.component';
import {FooterComponent} from '@app/core/footer/footer.component';
import {SharedModule} from '@app/shared';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    MatIconModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
  ]
})
export class CoreModule {

  /**
   * The constructor checks to make sure that the CoreModule has not already
   * been imported previously, throwing an error if it has.
   * @ignore
   */
  constructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in AppModule only.'
      );
    }
  }

  /**
   * Function to separate providers from the module to prevent re-imports of providers.
   */
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: []
    };
  }

}
