import {Component, HostListener} from '@angular/core';
import * as $ from 'jquery';

/**
 * Component for the footer of the site.
 */
@Component({
  selector: 'app-footer',
  templateUrl: 'footer.component.html',
  styleUrls: ['footer.component.scss']
})
export class FooterComponent {

  /**
   * The list of options for the footer.
   * @ignore
   */
  private footOptions = [
    {
      label: 'Linkedin',
      linkId: 'linkedin',
      icon: 'linkedin'
    },
    {
      label: 'Github',
      linkId: 'github',
      icon: 'github-circle'
    }
  ];

  /**
   * Whether or not the user is hovered over the footer.
   * @ignore
   */
  private hovered = false;

  /**
   * @ignore
   */
  constructor() {
    this.init();
  }

  /**
   * Initializes footer stuff.
   */
  private init(): void {
    // Make footer invisible at top of page
    $(window).scroll(() => {
      if ($(window).scrollTop() === 0) {
        $('#footer-container').parent().css({'height': '0', 'opacity': '0', 'visibility': 'hidden'});
      } else {
        $('#footer-container').parent().css({'height': '65px', 'opacity': '1', 'visibility': 'visible'});
      }
    });
  }

  /**
   * Listens for if user hovers over image.
   * @ignore
   */
  @HostListener('mouseenter')
  onMouseEnter() {
    this.hovered = true;
    $('#footer-container').parent().css({'height': '80px'});
  }

  /**
   * Listens for if user ends hovering over image.
   * @ignore
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    $('#footer-container').parent().css({'height': '65px'});
  }

  /**
   * Scrolls the screen back to the top of the page.
   * @ignore
   */
  private scrollToTop(): void {
    $('html, body').animate({
      scrollTop: 0
    }, 750);
  }

}
