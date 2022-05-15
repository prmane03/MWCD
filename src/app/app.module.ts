import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { LegislationComponent } from './main/legislation/legislation.component';
import { StepComponent } from './main/step/step.component';
import { NgoComponent } from './main/ngo/ngo.component';
import { AdminComponent } from './main/admin/admin.component';
import { HostelComponent } from './main/hostel/hostel.component';
import { SukanyaComponent } from './main/sukanya/sukanya.component';
import { FaqComponent } from './main/faq/faq.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    LegislationComponent,
    StepComponent,
    NgoComponent,
    AdminComponent,
    HostelComponent,
    SukanyaComponent,
    FaqComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
