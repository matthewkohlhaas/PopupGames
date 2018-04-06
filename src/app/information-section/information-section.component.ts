import { Component } from '@angular/core';

@Component({
  selector: 'app-information-section',
  templateUrl: './information-section.component.html',
  styleUrls: ['./information-section.component.css']
})
export class InformationSectionComponent {

  readonly MEMBERS = [
    {
      name: 'Hung Do',
      information: [
        'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
        'Will graduate May 2018',
        'Full stack developer at ADP'
      ],
      email: 'hdhungdo@gmail.com',
      imageUrl: 'assets/hd.jpg'
    }, {
      name: 'Kavir Jones',
      information: [
        'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
        'Will graduate December 2018',
      ],
      email: 'kjones319@gatech.edu',
      imageUrl: 'assets/kj.jpg'
    }, {
      name: 'Matthew Kohlhaas',
      information: [
        'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
        'Will graduate May 2018',
        'Full stack software engineer with Angular, Spring, and Node Express experience'
      ],
      email: 'mkohlhaas3@gatech.edu',
      imageUrl: 'assets/mk.jpg'
    }, {
      name: 'Matt McCoy',
      information: [
        'Fifth-year student at Georgia Institute of Technology pursing a BS in Computer Science',
        'Will graduate May 2018',
        'Has a passion for Android development'
      ],
      email: 'mmccoy37@gatech.edu',
      imageUrl: 'assets/mm.jpg'
    }
  ];

  constructor() { }

}
