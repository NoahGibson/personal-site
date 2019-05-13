import {Component, HostListener, Input} from '@angular/core';

@Component({
  selector: 'app-image-display',
  templateUrl: 'image-display.component.html',
  styleUrls: ['image-display.component.scss']
})
export class ImageDisplayComponent {

  /**
   * The image for the display.
   */
  @Input() img: string;

  /**
   * The title for the image to be displayed.
   */
  @Input() title: string;

  /**
   * The caption for the image to be displayed.
   */
  @Input() caption: string;

  /**
   * Whether or not the image is grayscale by default.
   */
  @Input() grayscale = false;

  /**
   * Whether or not the image has been clicked.
   * @ignore
   */
  private clicked = false;

  /**
   * Whether or not the user is hovered over the image.
   * @ignore
   */
  private hovered = false;

  /**
   * Listens for if user clicks image.
   * @ignore
   */
  @HostListener('click')
  onClick() {
    this.clicked = !this.clicked;
  }

  /**
   * Listens for if user hovers over image.
   * @ignore
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
  }

  /**
   * Listens for if user ends hovering over image.
   * @ignore
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
  }

}
