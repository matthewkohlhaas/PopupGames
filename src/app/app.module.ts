import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { VideoSectionComponent } from './video-section/video-section.component';
import { TitleBarComponent } from './title-bar/title-bar.component';
import { MatButtonModule, MatCardModule, MatDividerModule, MatIconModule, MatToolbarModule } from '@angular/material';
import { AboutSectionComponent } from './about-section/about-section.component';
import { InformationSectionComponent } from './information-section/information-section.component';
import { TeamMemberInfoComponent } from './team-member-info/team-member-info.component';
import { FeaturesSectionComponent } from './features-section/features-section.component';
import { UICarouselModule } from 'ui-carousel';
import { FeatureInfoComponent } from './feature-info/feature-info.component';
import { VideoDirective } from '../directives/video.directive';

@NgModule({
  declarations: [
    AppComponent,
    VideoSectionComponent,
    TitleBarComponent,
    AboutSectionComponent,
    InformationSectionComponent,
    TeamMemberInfoComponent,
    FeaturesSectionComponent,
    FeatureInfoComponent,
    VideoDirective
  ],
  imports: [
    BrowserModule,
    UICarouselModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
