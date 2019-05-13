import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatIconModule} from '@angular/material';

import {HorizontalTimelineComponent} from './components/horizontal-timeline/horizontal-timeline.component';
import {SectionHeaderComponent} from '@app/shared/components/section-header/section-header.component';
import {SectionComponent} from '@app/shared/components/section/section.component';
import {SectionBreakComponent} from '@app/shared/components/section-break/section-break.component';
import {ImageDisplayComponent} from '@app/shared/components/image-display/image-display.component';
import {GetStringPipe} from '@app/shared/pipes/get-string.pipe';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule
  ],
  declarations: [
    HorizontalTimelineComponent,
    SectionHeaderComponent,
    SectionComponent,
    SectionBreakComponent,
    ImageDisplayComponent,
    GetStringPipe
  ],
  exports: [
    HorizontalTimelineComponent,
    SectionHeaderComponent,
    SectionComponent,
    SectionBreakComponent,
    ImageDisplayComponent,
    GetStringPipe
  ]
})
export class SharedModule {}
