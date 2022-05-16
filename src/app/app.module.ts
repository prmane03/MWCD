import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
<<<<<<< HEAD
import { ServiceComponent } from './service/service.component';
=======
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
>>>>>>> d0c0dba1a60f01d89021cc987c05702026441c59

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
<<<<<<< HEAD
    ServiceComponent
=======
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
>>>>>>> d0c0dba1a60f01d89021cc987c05702026441c59
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
