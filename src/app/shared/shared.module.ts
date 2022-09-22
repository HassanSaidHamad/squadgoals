import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { MapComponent } from './components/map/map.component';
import { GraphsComponent } from './components/graphs/graphs.component';
import { PopulationComponent } from './components/population/population.component';
import { HostpotsComponent } from './components/hostpots/hostpots.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { ActionableProblemComponent } from './components/actionable-problem/actionable-problem.component';
import { CausesComponent } from './components/causes/causes.component';
import { EffectsComponent } from './components/effects/effects.component';
import { HindrancesComponent } from './components/hindrances/hindrances.component';
import { InitiativeComponent } from './components/initiative/initiative.component';
import { MapIntroComponent } from './components/map-intro/map-intro.component';
import { StakeholdersComponent } from './components/stakeholders/stakeholders.component';
import { ImpactsComponent } from './components/impacts/impacts.component';
import { ImagesComponent } from './components/images/images.component';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    IntroductionComponent,
    AboutUsComponent,
    ContactUsComponent,
    MapComponent,
    GraphsComponent,
    PopulationComponent,
    HostpotsComponent,
    ActionableProblemComponent,
    CausesComponent,
    EffectsComponent,
    HindrancesComponent,
    InitiativeComponent,
    MapIntroComponent,
    StakeholdersComponent,
    ImpactsComponent,
    ImagesComponent,
    CommentsComponent,
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
    MatListModule,
    FlexLayoutModule,
    RouterModule,
    LeafletModule
  ],
  exports: [
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    IntroductionComponent
  ]
})
export class SharedModule { }
