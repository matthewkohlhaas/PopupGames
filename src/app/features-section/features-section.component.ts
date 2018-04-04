import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-features-section',
  templateUrl: './features-section.component.html',
  styleUrls: ['./features-section.component.css']
})
export class FeaturesSectionComponent {

  readonly FEATURES = [
    {
      title: 'Create Your Own Events',
      information: ['Create your own custom events at any given time and place within the Georgia Tech campus.'],
      imageUrl: 'assets/feature0.png'
    }, {
      title: 'Discover New Events',
      information: ['Discover events hosted by other students, and filter them by location.'],
      imageUrl: 'assets/feature1.png'
    }, {
      title: 'Manage Events',
      information: ['View event and event attendee details, RSVP to events, and delete your own events as you please.'],
      imageUrl: 'assets/feature2.png'
    }, {
      title: 'See Event Locations on Map',
      information: ['View the location of any event on Google Maps.'],
      imageUrl: 'assets/feature3.png'
    }
  ];

  constructor() { }

}
