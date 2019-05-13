import {Component, HostListener} from '@angular/core';
import * as $ from 'jquery';

/**
 * Component for the header/navbar of the site.
 */
@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.scss']
})
export class HeaderComponent {

  /**
   * The list of options for the navigation bar.
   * @ignore
   */
  private navOptions = [
    {
      label: 'About',
      sectionId: '#about',
      icon: 'account'
    },
    {
      label: 'Projects',
      sectionId: '#projects',
      icon: 'code-tags'
    },
    {
      label: 'Contact',
      sectionId: '#contact',
      icon: 'email'
    }
  ];

  /**
   * Whether or not the user is hovered over the header.
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
   * Initializes header stuff.
   */
  private init(): void {
    // Make header invisible at top of page
    $(window).scroll(() => {
      if ($(window).scrollTop() === 0) {
        $('#header-container').parent().css({'height': '0', 'opacity': '0', 'visibility': 'hidden'});
      } else {
        $('#header-container').parent().css({'height': '65px', 'opacity': '1', 'visibility': 'visible'});
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
    $('#header-container').parent().css({'height': '80px'});
  }

  /**
   * Listens for if user ends hovering over image.
   * @ignore
   */
  @HostListener('mouseleave')
  onMouseLeave() {
    this.hovered = false;
    $('#header-container').parent().css({'height': '65px'});
  }

  /**
   * Scrolls the screen to the element with the given id.
   *
   * @param id The id of the element to scroll to
   * @ignore
   */
  private scrollTo(id: string): void {
    $('html, body').animate({
      scrollTop: $(id).offset().top - 65 // subtracting 65 to account for header bar
    }, 750);
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
