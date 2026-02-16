import { Component } from '@angular/core';
import { HeroComponent } from './components/hero/hero.component';
import { AboutComponent } from './components/about/about.component';
import { VisionMissionComponent } from './components/vision-mission/vision-mission.component';
import { ServicesComponent } from './components/services/services.component';
import { IndustriesComponent } from './components/industries/industries.component';
import { CompetencyComponent } from './components/competency/competency.component';
import { FounderComponent } from './components/founder/founder.component';
import { TeamComponent } from './components/team/team.component';
import { PartnersClientsComponent } from './components/partners-clients/partners-clients.component';
import { ContactComponent } from './components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    AboutComponent,
    VisionMissionComponent,
    ServicesComponent,
    IndustriesComponent,
    CompetencyComponent,
    FounderComponent,
    TeamComponent,
    PartnersClientsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-about></app-about>
    <app-vision-mission></app-vision-mission>
    <app-services></app-services>
    <app-industries></app-industries>
    <app-competency></app-competency>
    <app-founder></app-founder>
    <app-team></app-team>
    <app-partners-clients></app-partners-clients>
    <app-contact></app-contact>
  `
})
export class HomeComponent { }
