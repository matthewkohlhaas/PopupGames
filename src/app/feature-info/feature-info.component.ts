import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature-info',
  templateUrl: './feature-info.component.html',
  styleUrls: ['./feature-info.component.css']
})
export class FeatureInfoComponent {

  @Input() title: string;
  @Input() imageUrl: string;
  @Input() information: string;

  constructor() { }

}
