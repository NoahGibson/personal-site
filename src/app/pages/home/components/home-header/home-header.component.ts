import {Component, Input, OnInit} from '@angular/core';
import * as $ from 'jquery';

/**
 * Component for the main header area of the home page.
 */
@Component({
  selector: 'app-home-header',
  templateUrl: 'home-header.component.html',
  styleUrls: ['home-header.component.scss']
})
export class HomeHeaderComponent implements OnInit {

  /**
   * The title for the header.
   */
  @Input() title = '';

  /**
   * The subtitle for the header.
   */
  @Input() subtitle = '';

  /**
   * @ignore
   */
  constructor() {}

  /**
   * @ignore
   */
  ngOnInit(): void {
    this.setHeaderStyles();
  }

  /**
   * Uses jQuery to set the necessary styles of the header element.
   * @ignore
   */
  private setHeaderStyles(): void {
    const headerBranding = $('#header-branding');
    const headerBackground = $('#home-header-background');
    headerBackground.css('filter', 'sepia(0) brightness(60%)');
    headerBranding.mouseenter(() => {
      const degrees = Math.floor(Math.random() * 360);
      headerBackground.css('filter', 'sepia(1) brightness(70%) hue-rotate(' + degrees + 'deg)');
    });
    headerBranding.mouseleave(() => {
      headerBackground.css('filter', 'sepia(0) brightness(60%)');
    });
  }

}
