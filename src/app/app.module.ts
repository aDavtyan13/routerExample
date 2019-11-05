import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginSectionComponent } from './login-section/login-section.component';

import { FormsModule } from '@angular/forms'
import { ReactiveFormsModule } from '@angular/forms';
import { DataSectionComponent } from './data-section/data-section.component';
import { SelectedUserComponent } from './selected-user/selected-user.component';
import { AuthGuard } from './auth.guard';
import { UserIdComponent } from './user-id/user-id.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSectionComponent,
    DataSectionComponent,
    SelectedUserComponent,
    UserIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
