import {Component, Input} from '@angular/core';
import * as $ from 'jquery';

/**
 * Component for a site branding display for the home page header.
 */
@Component({
  selector: 'app-header-branding',
  templateUrl: 'header-branding.component.html',
  styleUrls: ['header-branding.component.scss']
})
export class HeaderBrandingComponent {

  /**
   * The title for the header branding.
   */
  @Input() title = '';

  /**
   * The subtitle for the header branding.
   */
  @Input() subtitle = '';

  /**
   * The current details message to display in the circle.
   * @ignore
   */
  private details = '';

  /**
   * The current icon to display in the circle.
   * @ignore
   */
  private icon = '';

  /**
   * The list of all navigation options for the branding.
   *
   * Note: if changing the number of options in this list, make sure
   * to change the css of the #options-list @include on-circle(..) to
   * have the correct number of items in order to match the number of items
   * in this list.
   *
   * @ignore
   */
  private options = [
    {
      icon: 'email',
      link: null,
      sectionId: '#contact',
      title: 'Contact'
    },
    {
      icon: 'github-circle',
      link: 'https://github.com/noahgibson',
      sectionId: null,
      title: 'Github'
    },
    {
      icon: 'linkedin',
      link: 'https://www.linkedin.com/in/noahgibson/',
      sectionId: null,
      title: 'Linkedin'
    },
    {
      icon: 'account',
      link: null,
      sectionId: '#about',
      title: 'About'
    },
    {
      icon: 'code-tags',
      link: null,
      sectionId: '#projects',
      title: 'Projects'
    }
  ];

  /**
   * @ignore
   */
  constructor() {}

  /**
   * Function for handling when the user hovers over an option of the branding.
   *
   * @param event The event data containing the title of the option and icon
   */
  onHoverOption(event) {
    this.details = event.title;
    this.icon = event.icon;
    $('#inner-circle-content').hide();
    $('#inner-circle-details').show();
  }

  /**
   * Function for handling when the user stops hovering over an option of the branding.
   */
  onLeaveOption() {
    $('#inner-circle-details').hide();
    $('#inner-circle-content').show();
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

}
