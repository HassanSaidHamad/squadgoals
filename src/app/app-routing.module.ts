import { CommentsComponent } from './shared/components/comments/comments.component';
import { ImagesComponent } from './shared/components/images/images.component';
import { ImpactsComponent } from './shared/components/impacts/impacts.component';
import { StakeholdersComponent } from './shared/components/stakeholders/stakeholders.component';
import { MapIntroComponent } from './shared/components/map-intro/map-intro.component';
import { InitiativeComponent } from './shared/components/initiative/initiative.component';
import { EffectsComponent } from './shared/components/effects/effects.component';
import { HindrancesComponent } from './shared/components/hindrances/hindrances.component';
import { CausesComponent } from './shared/components/causes/causes.component';
import { ActionableProblemComponent } from './shared/components/actionable-problem/actionable-problem.component';
import { HostpotsComponent } from './shared/components/hostpots/hostpots.component';
import { PopulationComponent } from './shared/components/population/population.component';
import { GraphsComponent } from './shared/components/graphs/graphs.component';
import { MapComponent } from './shared/components/map/map.component';
import { ContactUsComponent } from './shared/components/contact-us/contact-us.component';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { IntroductionComponent } from './shared/components/introduction/introduction.component';
import { PostsComponent } from './modules/posts/posts.component';
import { DashboardComponent } from 'src/app/modules/dashboard/dashboard.component';
import { DefaultComponent } from './layouts/default/default.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '', component: DefaultComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'introduction', component: IntroductionComponent },
      { path: 'actionable', component: ActionableProblemComponent },
      { path: 'causes', component: CausesComponent },
      { path: 'hindrances', component: HindrancesComponent },
      { path: 'effects', component: EffectsComponent },
      { path: 'initiative', component: InitiativeComponent },
      { path: 'map-intro', component: MapIntroComponent },
      { path: 'aboutUs', component: AboutUsComponent },
      { path: 'contactUs', component: ContactUsComponent },
      { path: 'map', component: MapComponent },
      { path: 'stakeholders', component: StakeholdersComponent },
      { path: 'impacts', component: ImpactsComponent },
      { path: 'images', component: ImagesComponent },
      { path: 'graphs', component: GraphsComponent },
      { path: 'population', component: PopulationComponent },
      { path: 'hostpots', component: HostpotsComponent },
      { path: 'comments', component: CommentsComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
