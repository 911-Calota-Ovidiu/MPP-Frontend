import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/people/components/overview/overview.component';
import { StatisticsOverviewComponent } from './features/children/components/statistics-overview/statistics-overview.component';
import { ListOverviewComponent } from './features/children/components/list-overview/list-overview.component';
import { AddComponent } from './features/people/components/add/add.component';
import { DeleteComponent } from './features/people/components/delete/delete.component';
import { UpdateComponent } from './features/people/components/update/update.component';
import { GetOneComponent } from './features/people/components/get-one/get-one.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"adults",
    component:OverviewComponent
  },
  {
    path:"children",
    component:ListOverviewComponent
  },
  {
    path:"adult/add",
    component:AddComponent
  },
  {
    path:"adult/delete",
    component:DeleteComponent
  },
  {
    path:"adult/update",
    component:UpdateComponent
  },
  {
    path:"adult/:id",
    component:GetOneComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
