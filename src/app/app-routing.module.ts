import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home-page/home-page.component';
import { ProjectPageComponent } from './project-page/project-page.component';
import { TeamPageComponent } from './team-page/team-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { FeaturesComponent } from './features/features.component';
import { GalleryComponent } from './gallery/gallery.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {path: 'home-page-component', component: HomePageComponent},
  {path: 'project-page-component', component: ProjectPageComponent},
  {path: 'team-page-component', component: TeamPageComponent},
  {path: 'about-page-component', component: AboutPageComponent},
  {path: 'contact-page-component', component: ContactPageComponent},
  {path: 'features-component', component: FeaturesComponent},
  {path: 'gallery-component', component: GalleryComponent},
  {path: 'pricing-component', component: PricingComponent},
  {path: '', redirectTo: '/home-page-component', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
