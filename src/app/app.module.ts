import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './main/home/home.component';
import { AboutComponent } from './main/about/about.component';
import { LegislationComponent } from './main/legislation/legislation.component';
import { StepComponent } from './main/step/step.component';
import { NgoComponent } from './ngo/ngo.component';
import { AdminComponent } from './main/admin/admin.component';
import { HostelComponent } from './main/hostel/hostel.component';
import { SukanyaComponent } from './main/sukanya/sukanya.component';
import { FaqComponent } from './main/faq/faq.component';
import { LoginComponent } from './main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { OrganizationComponent } from './ngo/organization/organization.component';
import { FundingComponent } from './ngo/funding/funding.component';
import { NgoregisterComponent } from './ngo/ngoregister/ngoregister.component';
import { NgostatusComponent } from './ngo/ngostatus/ngostatus.component';
import { CandidateComponent } from './admin/candidate/candidate.component';
import { AdminNgoComponent } from './admin/admin-ngo/admin-ngo.component';
import { AddNgoComponent } from './admin/add-ngo/add-ngo.component';
import { UpdateNgoComponent } from './admin/update-ngo/update-ngo.component';
import { AddCandidateComponent } from './admin/add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './admin/update-candidate/update-candidate.component';
import { HostelLocationComponent } from './hostel/hostel-location/hostel-location.component';

import { HostelBookingComponent } from './hostel/hostel-booking/hostel-booking.component';
import { NgoHomeComponent } from './main/ngo-home/ngo-home.component';
import { NgoNavbarComponent } from './ngo/ngo-navbar/ngo-navbar.component';

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
    RegisterComponent,
    CriteriaComponent,
    OrganizationComponent,
    FundingComponent,
    NgoregisterComponent,
    NgostatusComponent,
    CandidateComponent,
    AdminNgoComponent,
    AddNgoComponent,
    UpdateNgoComponent,
    AddCandidateComponent,
    UpdateCandidateComponent,
    HostelLocationComponent,
    HostelBookingComponent,
    NgoHomeComponent,
    NgoNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }