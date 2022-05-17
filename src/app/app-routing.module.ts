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
  { path: 'adminngo', component:  AdminNgoComponent},
  { path: 'add-ngo', component:  AddNgoComponent},
  { path: 'update-ngo', component:  UpdateNgoComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
