import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNgoComponent } from './admin/admin-ngo/admin-ngo.component';
import { AboutComponent } from './main/about/about.component';
import { AdminComponent } from './main/admin/admin.component';
import { FaqComponent } from './main/faq/faq.component';
import { HomeComponent } from './main/home/home.component';
import { HostelComponent } from './main/hostel/hostel.component';
import { LegislationComponent } from './main/legislation/legislation.component';
import { LoginComponent } from './main/login/login.component';
import { NgoComponent } from './ngo/ngo.component';
import { RegisterComponent } from './main/register/register.component';
import { StepComponent } from './main/step/step.component';
import { SukanyaComponent } from './main/sukanya/sukanya.component';
import { NgoregisterComponent } from './ngo/ngoregister/ngoregister.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { NgostatusComponent } from './ngo/ngostatus/ngostatus.component';
import { OrganizationComponent } from './ngo/organization/organization.component';
import { FundingComponent } from './ngo/funding/funding.component';


const routes: Routes = [

  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'legislation', component: LegislationComponent },
  { path: 'step', component: StepComponent },
  { path: 'ngo', component: NgoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sukanya', component: SukanyaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'hostel', component: HostelComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'ngoregister', component: NgoregisterComponent },
  { path: 'criteria', component:CriteriaComponent },
  { path: 'ngostatus', component: NgostatusComponent },
  { path: 'organization', component: OrganizationComponent},
  { path: 'funding', component: FundingComponent},
  { path: 'adminngo', component:  AdminNgoComponent},
  {path: 'ngostatus', component:NgostatusComponent},
  { path: 'auth',children :

  [
      {path: 'criteria', component: CriteriaComponent},
      {path: 'funding', component: FundingComponent},
      {path: 'organization', component: OrganizationComponent},
      {path: 'ngoregister', component: NgoregisterComponent},
      {path: 'ngostatus', component: NgostatusComponent},
    
  ]},
  { path: 'adminngo', component:  AdminNgoComponent},
  { path: 'auth',children : 
  [
    { path: 'login/:type', component: LoginComponent },
    { path: 'register/:type', component: RegisterComponent }
  ] },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
