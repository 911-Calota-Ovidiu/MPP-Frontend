import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/people/components/overview/overview.component';
import { StatisticsOverviewComponent } from './features/children/components/statistics-overview/statistics-overview.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adult",
    component:OverviewComponent
  },
  {
    path:"childAVG",
    component:StatisticsOverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
