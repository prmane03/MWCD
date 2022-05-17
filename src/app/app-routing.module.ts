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
import { NgoComponent } from './main/ngo/ngo.component';
import { RegisterComponent } from './main/register/register.component';
import { StepComponent } from './main/step/step.component';
import { SukanyaComponent } from './main/sukanya/sukanya.component';
import { AddNgoComponent } from './admin/add-ngo/add-ngo.component';
import { UpdateNgoComponent } from './admin/update-ngo/update-ngo.component';
import { AddCandidateComponent } from './admin/add-candidate/add-candidate.component';
import { UpdateCandidateComponent } from './admin/update-candidate/update-candidate.component';

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
  { path: 'admin',children:[
    { path: 'adminngo', component:  AdminNgoComponent},
  { path: 'add-ngo', component:  AddNgoComponent},
  { path: 'update-ngo', component:  UpdateNgoComponent},
  { path: 'add-candidate', component: AddCandidateComponent},
  { path: 'update-candidate', component: UpdateCandidateComponent}
  ] },
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
