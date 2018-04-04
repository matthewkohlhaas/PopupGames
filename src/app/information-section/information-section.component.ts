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
      information: ['Information goes here', 'More info here'],
      email: 'Email Goes here',
      imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/12191147_987827851273686_3745170426158390146_o.jpg?_nc_cat=0&oh=30dec04f740'
        + '756b8eb5256cbf6e838fa&oe=5B316BAF'
    }, {
      name: 'Kavir Jones',
      information: ['Information goes here', 'More info here'],
      email: 'Email Goes here',
      imageUrl: 'http://mhcsa.org.au/wp-content/uploads/2016/08/facebook-default-no-profile-pic.jpg'
    }, {
      name: 'Matthew Kohlhaas',
      information: ['Senior at Georgia Institute of Technology pursing a BS in Computer Science', 'Will graduate Spring 2018'],
      email: 'mkohlhaas3@gatech.edu',
      imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/1079052_10201330734523096_774945990_o.jpg?_nc_cat=0&oh=71fff593b83c2d16b902'
        + '9ebe821f2ffa&oe=5B6AC191'
    }, {
      name: 'Matt McCoy',
      information: ['Information goes here', 'More info here'],
      email: 'Email Goes here',
      imageUrl: 'https://scontent-atl3-1.xx.fbcdn.net/v/t31.0-8/29749245_10214666654207469_3452371945575167144_o.jpg?_nc_cat=0&oh=1eece5005'
        + 'a86d45a0d716fce5e225177&oe=5B64141F'
    }
  ];

  constructor() { }

}
