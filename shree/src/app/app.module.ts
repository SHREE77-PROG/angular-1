import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FeatureComponent } from './feature/feature.component';
import { FormsModule } from '@angular/forms';
import { PricingComponent } from './pricing/pricing.component';
import { DisabledComponent } from './disabled/disabled.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    FeatureComponent,
    PricingComponent,
    DisabledComponent,
    HeaderComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
