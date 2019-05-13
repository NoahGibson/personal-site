import {Component} from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss']
})
export class HomePageComponent {

  timeline: any = [
    {
      date: new Date('December 17, 1995 00:00:00'),
      title: 'First Event',
      selected: true,
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at facilisis nunc, non scelerisque nisi. Aliquam fermentum id nulla in cursus. Etiam venenatis orci felis, nec egestas urna semper ut. Praesent commodo sem et turpis elementum, nec venenatis orci scelerisque. Praesent lacus ligula, vehicula eget nulla non, porta fringilla ante. In condimentum lectus et lectus porttitor luctus. Quisque ultricies ipsum augue, sit amet molestie ante dictum ut. Vestibulum sed tortor sem. Proin libero enim, faucibus sit amet efficitur ut, dictum at velit. Aenean hendrerit lectus in fringilla lacinia. Pellentesque congue mi ac interdum fermentum. Etiam augue eros, consectetur vitae tellus vel, eleifend cursus arcu. Donec feugiat nunc magna, vitae aliquam lectus hendrerit vel. Vivamus lorem turpis, pulvinar sed nisl a, dignissim varius dolor.'
    },
    {
      date: new Date('December 18, 1995 00:00:00'),
      title: 'Second Event',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas at facilisis nunc, non scelerisque nisi. Aliquam fermentum id nulla in cursus. Etiam venenatis orci felis, nec egestas urna semper ut. Praesent commodo sem et turpis elementum, nec venenatis orci scelerisque. Praesent lacus ligula, vehicula eget nulla non, porta fringilla ante. In condimentum lectus et lectus porttitor luctus. Quisque ultricies ipsum augue, sit amet molestie ante dictum ut. Vestibulum sed tortor sem. Proin libero enim, faucibus sit amet efficitur ut, dictum at velit. Aenean hendrerit lectus in fringilla lacinia. Pellentesque congue mi ac interdum fermentum. Etiam augue eros, consectetur vitae tellus vel, eleifend cursus arcu. Donec feugiat nunc magna, vitae aliquam lectus hendrerit vel. Vivamus lorem turpis, pulvinar sed nisl a, dignissim varius dolor.'
    }
  ];

}
