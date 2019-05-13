import {Pipe, PipeTransform} from '@angular/core';

import Strings from '@assets/strings/en.json';

/**
 * Pipe that, given a string resource identifier, returns the specified string.
 */
@Pipe({
  name: 'getString'
})
export class GetStringPipe implements PipeTransform {

  public transform(value: string, type: string): string {
    switch (type) {
      case 'link': return Strings.LINKS[value];
      default: throw new Error(`Invalid string type specified: ${type}`);
    }
  }

}
