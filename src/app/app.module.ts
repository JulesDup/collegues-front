import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColleguesComponent } from './collegues/collegues.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { HttpClientModule } from '@angular/common/http';
import { AppFormCollegueComponent } from './app-form-collegue/app-form-collegue.component';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AffichageCollRecherComponent } from './affichage-coll-recher/affichage-coll-recher.component';


const appRoute: Routes = [
  { path: 'formulaireCollegue', component: AppFormCollegueComponent },
  { path: 'accueil', component: AffichageCollRecherComponent },
  { path: 'galerie', component: AffichageCollRecherComponent },
  { path: '', pathMatch: 'full', redirectTo: 'accueil' }
];
@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AppRechercheCollegueParNomComponent,
    AppHeaderComponent,
    AppFormCollegueComponent,
    AffichageCollRecherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoute),
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
