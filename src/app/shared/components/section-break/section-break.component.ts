import {Component, Input} from '@angular/core';

/**
 * Component for a stylized break in between sections.
 */
@Component({
  selector: 'app-section-break',
  template: `
    <div class="section-break" [ngStyle]="{'background-image':getImageURL(img)}"></div>
  `,
  styles: [`
    .section-break {
      width: 100%;
      height: 200px;
      background-attachment: fixed;
      background-size: cover;
      background-position: center;
      margin-top: 50px;
    }
  `]
})
export class SectionBreakComponent {

  /**
   * The background image for the section break.
   */
  @Input() img: string;

  /**
   * Gets the URL for the given image path.
   * @ignore
   */
  private getImageURL(image): string {
    return 'url("' + image + '")';
  }

}
