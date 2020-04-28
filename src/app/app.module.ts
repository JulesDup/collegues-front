import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ColleguesComponent } from './collegues/collegues.component';
import { AppRechercheCollegueParNomComponent } from './app-recherche-collegue-par-nom/app-recherche-collegue-par-nom.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ColleguesComponent,
    AppRechercheCollegueParNomComponent,
    AppFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
