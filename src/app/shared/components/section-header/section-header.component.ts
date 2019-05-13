import {Component, Input} from '@angular/core';

/**
 * Component for a section header of a page.
 */
@Component({
  selector: 'app-section-header',
  templateUrl: 'section-header.component.html',
  styleUrls: ['section-header.component.scss']
})
export class SectionHeaderComponent {

  /**
   * The title of the header.
   */
  @Input() title: string;

}
