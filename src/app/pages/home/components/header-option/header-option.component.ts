import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Router} from '@angular/router';

/**
 * Component for an option that appears in the home header section.
 */
@Component({
  selector: 'app-header-option',
  templateUrl: 'header-option.component.html',
  styleUrls: ['header-option.component.scss']
})
export class HeaderOptionComponent {

  /**
   * The title for the header option.
   */
  @Input() title = '';

  /**
   * The name of the icon to use for the option.
   */
  @Input() icon: string;

  /**
   * The link to send the user to when clicking the option.
   */
  @Input() link = '';

  /**
   * Event emitter that emits the title and icon of the option when the user hovers over the option.
   */
  @Output() hover: EventEmitter<any> = new EventEmitter();

  /**
   * Event emitter that emits when the user leaves hovering the option.
   */
  @Output() leave: EventEmitter<any> = new EventEmitter();

  /**
   * @ignore
   */
  constructor(private router: Router) {}

  /**
   * Navigates the user to the given link.
   *
   * @param link The link to navigate to
   */
  navigate(link): void {
    window.location = link;
  }

  /**
   * Function for when the user hovers over the option.
   */
  onHover(): void {
    this.hover.emit({title: this.title, icon: this.icon});
  }

  /**
   * Function for when the user is no longer hovering over the option.
   */
  onLeave(): void {
    this.leave.emit(null);
  }

}
