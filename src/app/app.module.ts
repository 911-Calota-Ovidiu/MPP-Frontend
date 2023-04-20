import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './common/home/home.component';
import { OverviewComponent } from './features/people/components/overview/overview.component';
import { HttpClientModule } from"@angular/common/http";
import { StatisticsOverviewComponent } from './features/children/components/statistics-overview/statistics-overview.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OverviewComponent,
    StatisticsOverviewComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
