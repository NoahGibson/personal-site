import {Component} from '@angular/core';

/**
 * Component container for a section of a page.
 */
@Component({
  selector: 'app-section',
  template: `
    <div class="section">
      <ng-content></ng-content>
    </div>
  `,
  styles: [`
    .section {
      width: 100%;
      max-width: 1400px;
      margin: auto;
    }
  `]
})
export class SectionComponent {}
