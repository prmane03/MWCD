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
<<<<<<< HEAD
import { AddNgoComponent } from './admin/add-ngo/add-ngo.component';
import { UpdateNgoComponent } from './admin/update-ngo/update-ngo.component';
import { AddCandidateComponent } from './admin/add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './admin/update-candidate/update-candidate.component';
=======
import { NgoregisterComponent } from './ngo/ngoregister/ngoregister.component';
import { CriteriaComponent } from './ngo/criteria/criteria.component';
import { NgostatusComponent } from './ngo/ngostatus/ngostatus.component';
import { OrganizationComponent } from './ngo/organization/organization.component';
import { FundingComponent } from './ngo/funding/funding.component';

>>>>>>> d86f44f65b66af80522b88589838a3250914a180

const routes: Routes = [

  { 
    path: '', 
    component: HomeComponent , 
    canActivate:[RoleGuard],
    data:{
      roles:['admins','candidates','ngo']
    }
  },
  { path: 'about', component: AboutComponent },
  { path: 'legislation', component: LegislationComponent },
  { path: 'step', component: StepComponent },
  { path: 'ngo', component: NgoComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'sukanya', component: SukanyaComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'hostel', component: HostelComponent },
<<<<<<< HEAD
  { path: 'admin',children:[
    { path: 'adminngo', component:  AdminNgoComponent},
  { path: 'add-ngo', component:  AddNgoComponent},
  { path: 'update-ngo', component:  UpdateNgoComponent},
  { path: 'add-candidate', component: AddCandidateComponent},
  { path: 'update-candidate', component: UpdateCandidateComponent}
  ] },
=======
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
>>>>>>> d86f44f65b66af80522b88589838a3250914a180
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
