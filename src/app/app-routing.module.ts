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
import { AddChildComponent } from './features/children/components/add-child/add-child.component';
import { DeleteChildComponent } from './features/children/components/delete-child/delete-child.component';
import { GetOneChildComponent } from './features/children/components/get-one-child/get-one-child.component';
import { UpdateChildComponent } from './features/children/components/update-child/update-child.component';
import { FamiliesListOverviewComponent } from './features/families/components/families-list-overview/families-list-overview.component';
import { AddFamilyComponent } from './features/families/components/add-family/add-family.component';
import { DeleteFamilyComponent } from './features/families/components/delete-family/delete-family.component';
import { GetOneFamilyComponent } from './features/families/components/get-one-family/get-one-family.component';
import { UpdateFamilyComponent } from './features/families/components/update-family/update-family.component';
import { AddChildFamilyComponent } from './features/families/components/add-child-family/add-child-family.component';
import { AddFriendComponent } from './features/friends/components/add-friend/add-friend.component';
import { FriendsOverviewComponent } from './features/friends/components/friends-overview/friends-overview.component';
import { GetOneFriendComponent } from './features/friends/components/get-one-friend/get-one-friend.component';
import { RemoveFriendComponent } from './features/friends/components/remove-friend/remove-friend.component';

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
    path:"families",
    component:FamiliesListOverviewComponent
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
    path:"adult/delete/:id",
    component:DeleteComponent
  },
  {
    path:"adult/update/:id",
    component:UpdateComponent
  },
  {
    path:"adult/:id",
    component:GetOneComponent
  },
  {
    path:"child/add",
    component:AddChildComponent
  },
  {
    path:"child/delete/:id",
    component:DeleteChildComponent
  },
  {
    path:"child/update/:id",
    component:UpdateChildComponent
  },
  {
    path:"child/:id",
    component:GetOneChildComponent
  },
  {
    path:"children/statistics",
    component:StatisticsOverviewComponent
  },
  {
    path:"family/add",
    component:AddFamilyComponent
  },
  {
    path:"family/delete/:id",
    component:DeleteFamilyComponent
  },
  {
    path:"family/update/:id",
    component:UpdateFamilyComponent
  },
  {
    path:"family/:id",
    component:GetOneFamilyComponent
  },
  {
    path:"family/child/:id",
    component:AddChildFamilyComponent
  },
  {
    path:"friend/:id",
    component:GetOneFriendComponent
  },
  {
    path:"friends",
    component:FriendsOverviewComponent
  },
  {
    path:"friend/delete/:id",
    component:RemoveFriendComponent
  },
  {
    path:"friends/add",
    component:AddFriendComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
