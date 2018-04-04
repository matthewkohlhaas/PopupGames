import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-team-member-info',
  templateUrl: './team-member-info.component.html',
  styleUrls: ['./team-member-info.component.css']
})
export class TeamMemberInfoComponent {

  @Input() name: string;
  @Input() imageUrl: string;
  @Input() information: string;
  @Input() email: string;

  constructor() { }

}
