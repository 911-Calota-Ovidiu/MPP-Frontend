import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/people/components/overview/overview.component';
import { HttpClientModule } from"@angular/common/http";
import { StatisticsOverviewComponent } from './features/children/components/statistics-overview/statistics-overview.component';
import { ListOverviewComponent } from './features/children/components/list-overview/list-overview.component';
import { AddComponent } from './features/people/components/add/add.component';
import { DeleteComponent } from './features/people/components/delete/delete.component';
import { UpdateComponent } from './features/people/components/update/update.component';
import { GetOneComponent } from './features/people/components/get-one/get-one.component'
import { FormsModule } from '@angular/forms';
import { AddChildComponent } from './features/children/components/add-child/add-child.component';
import { DeleteChildComponent } from './features/children/components/delete-child/delete-child.component';
import { UpdateChildComponent } from './features/children/components/update-child/update-child.component';
import { GetOneChildComponent } from './features/children/components/get-one-child/get-one-child.component';
import { FamiliesListOverviewComponent } from './features/families/components/families-list-overview/families-list-overview.component';
import { AddFamilyComponent } from './features/families/components/add-family/add-family.component';
import { DeleteFamilyComponent } from './features/families/components/delete-family/delete-family.component';
import { UpdateFamilyComponent } from './features/families/components/update-family/update-family.component';
import { GetOneFamilyComponent } from './features/families/components/get-one-family/get-one-family.component';
import { AddChildFamilyComponent } from './features/families/components/add-child-family/add-child-family.component';
import { FriendsOverviewComponent } from './features/friends/components/friends-overview/friends-overview.component';
import { AddFriendComponent } from './features/friends/components/add-friend/add-friend.component';
import { RemoveFriendComponent } from './features/friends/components/remove-friend/remove-friend.component';
import { GetOneFriendComponent } from './features/friends/components/get-one-friend/get-one-friend.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    StatisticsOverviewComponent,
    ListOverviewComponent,
    AddComponent,
    DeleteComponent,
    UpdateComponent,
    GetOneComponent,
    AddChildComponent,
    DeleteChildComponent,
    UpdateChildComponent,
    GetOneChildComponent,
    FamiliesListOverviewComponent,
    AddFamilyComponent,
    DeleteFamilyComponent,
    UpdateFamilyComponent,
    GetOneFamilyComponent,
    AddChildFamilyComponent,
    FriendsOverviewComponent,
    AddFriendComponent,
    RemoveFriendComponent,
    GetOneFriendComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
