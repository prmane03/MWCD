import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminNgoComponent } from './admin/admin-ngo/admin-ngo.component';
import { RoleGuard } from './Guard/role.guard';
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
import { AddNgoComponent } from './admin/add-ngo/add-ngo.component';
import { UpdateNgoComponent } from './admin/update-ngo/update-ngo.component';
import { AddCandidateComponent } from './admin/add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './admin/update-candidate/update-candidate.component';
import { NgoregisterComponent } from './ngo/ngoregister/ngoregister.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { NgostatusComponent } from './ngo/ngostatus/ngostatus.component';
import { OrganizationComponent } from './ngo/organization/organization.component';
import { FundingComponent } from './ngo/funding/funding.component';
import { HostelBookingComponent } from './hostel/hostel-booking/hostel-booking.component';
import { NgoHomeComponent } from './main/ngo-home/ngo-home.component';
import { CandidateComponent } from './admin/candidate/candidate.component';
import { AdminAboutComponent } from './admin/admin-about/admin-about.component';
import { NgoinfoComponent } from './step/ngoinfo/ngoinfo.component';
import { TrainingSectorComponent } from './step/training-sector/training-sector.component';
import { AuthGuard } from './Guard/auth.guard';


const routes: Routes = [

  // main routes  
  {
    path: '',
    component: HomeComponent,
    data: {
      roles: ['admins', 'candidates', 'ngo']
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'legislation', component: LegislationComponent },
  { path: 'step', component: StepComponent },
  { path: 'ngo', component: NgoHomeComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sukanya', component: SukanyaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'hostel', component: HostelComponent },
  {
    path: 'hostel', canActivate: [AuthGuard],children: [
      { path: 'hostel-booking', component: HostelBookingComponent }
    ]
  },

  // admin routes 
  {
    path: 'admin', canActivate: [AuthGuard],children: [
      { path: 'adminngo', component: AdminNgoComponent },
      { path: 'add-ngo', component: AddNgoComponent },
      { path: 'update-ngo/:id', component: UpdateNgoComponent },
      { path: 'add-candidate', component: AddCandidateComponent },
      { path: 'update-candidate/:id', component: UpdateCandidateComponent },
      { path: 'candidate', component: CandidateComponent },
      { path: 'about', component: AdminAboutComponent }
    ]
  },
  
  // ngo routes 
  { path: 'ngoDashboard', component: NgoComponent },
  {
    path: 'ngoDashboard', canActivate: [AuthGuard], children:

      [
        { path: 'criteria', component: CriteriaComponent },
        { path: 'funding', component: FundingComponent },
        { path: 'organization', component: OrganizationComponent },
        { path: 'ngoregister', component: NgoregisterComponent },
        { path: 'ngostatus', component: NgostatusComponent },

      ]
  },

  // auth routes
  {
    path: 'auth', children:
      [
        { path: 'login/:type', component: LoginComponent },
        { path: 'register/:type', component: RegisterComponent }
      ]
  },

    // step routes
    {
      path: 'step', children:
        [
          { path: 'ngo', component: NgoinfoComponent },
          { path: 'training-sectors', component: TrainingSectorComponent }
        ]
    },
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }