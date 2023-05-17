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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { LoginComponent } from './features/user/login/login.component';
import { MatCardModule } from '@angular/material/card';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule} from '@angular/material/checkbox';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { NavbarComponent } from './features/shared/navbar/navbar.component';
import { ProfileFormComponent } from './features/user/profile-form/profile-form.component';
import { ProfileComponent } from './features/user/profile/profile.component';
import { RegisterComponent } from './features/user/register/register.component';
import { AdminBoardComponent } from './features/admin-board/admin-board.component';
import { UserService } from './common/user.service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


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
    GetOneFriendComponent,
    LoginComponent,
    NavbarComponent,
    ProfileFormComponent,
    ProfileComponent,
    RegisterComponent,
    AdminBoardComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatCardModule,
    MatButtonModule,
    MatTabsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
