import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComplaintComponent } from './complaint/complaint.component';


import { TemplateComponent } from './template/template.component';
import { TripComponent } from './trip/trip.component';
const routes: Routes = [
  {
    path: '', component: TemplateComponent, children: [
      { path: 'trip', component: TripComponent }, 
      { path: 'complaint', component: ComplaintComponent },
     
      
    ]
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
