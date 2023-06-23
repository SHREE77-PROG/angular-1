import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisabledComponent } from './disabled/disabled.component';
import { FeatureComponent } from './feature/feature.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PricingComponent } from './pricing/pricing.component';

const routes: Routes = [
  {
    path:'navbar',component:NavbarComponent
  },
  {
    path:'home',component:HomeComponent
  },
  {
    path:'feature',component:FeatureComponent
  },
 {
  path:'pricing',component:PricingComponent
 },
 {
  path:'disabled',component:DisabledComponent
 }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
