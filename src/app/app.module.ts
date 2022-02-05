import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClusterComponent } from './cluster/cluster.component';
import {ChartModule} from "angular2-chartjs";
import { ChartBarreUtentiPerClusterComponent } from './chart-barre-utenti-per-cluster/chart-barre-utenti-per-cluster.component';
import { ChartTortaProvVisualizzazioniComponent } from './chart-torta-prov-visualizzazioni/chart-torta-prov-visualizzazioni.component';
import { ChartBarreUtentiSessoComponent } from './chart-barre-utenti-sesso/chart-barre-utenti-sesso.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    ErrorComponent,
    LoginComponent,
    SidebarComponent,
    HomepageComponent,
    ClusterComponent,
    ChartBarreUtentiPerClusterComponent,
    ChartTortaProvVisualizzazioniComponent,
    ChartBarreUtentiSessoComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
