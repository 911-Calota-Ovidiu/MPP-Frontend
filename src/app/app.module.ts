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
    GetOneComponent
    
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
