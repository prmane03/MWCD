import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './main/about/about.component';
import { AdminComponent } from './main/admin/admin.component';
import { FaqComponent } from './main/faq/faq.component';
import { HomeComponent } from './main/home/home.component';
import { HostelComponent } from './main/hostel/hostel.component';
import { LegislationComponent } from './main/legislation/legislation.component';
import { NgoComponent } from './main/ngo/ngo.component';
import { StepComponent } from './main/step/step.component';
import { SukanyaComponent } from './main/sukanya/sukanya.component';

const routes: Routes = [

  { path: 'homePage', component: HomeComponent },
  { path: 'aboutPage', component: AboutComponent },
  { path: 'legislationPage', component: LegislationComponent },
  { path: 'stepPage', component: StepComponent },
  { path: 'ngoPage', component: NgoComponent },
  { path: 'adminPage', component: AdminComponent },
  { path: 'sukanyaPage', component: SukanyaComponent },
  { path: 'faqPage', component: FaqComponent },
  { path: 'hostelPage', component: HostelComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
