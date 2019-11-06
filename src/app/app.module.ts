import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSectionComponent } from './login-section/login-section.component';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DataSectionComponent } from './data-section/data-section.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';
import { LastPageComponent } from './last-page/last-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSectionComponent,
    DataSectionComponent,
    SelectedUserComponent,
    LastPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
