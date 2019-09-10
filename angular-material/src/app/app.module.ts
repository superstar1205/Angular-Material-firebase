import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { MatExpansionModule, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule, MatButtonModule } from '@angular/material';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { AutocompleteComponent } from './components/pages/autocomplete/autocomplete.component';
import { CheckboxComponent } from './components/pages/checkbox/checkbox.component';


@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    AutocompleteComponent,
    CheckboxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
