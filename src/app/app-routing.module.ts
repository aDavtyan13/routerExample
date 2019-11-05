import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataSectionComponent } from './data-section/data-section.component'
import { LoginSectionComponent } from './login-section/login-section.component'
import { SelectedUserComponent } from './selected-user/selected-user.component'
import { AuthGuard } from './auth.guard';
import { UserIdComponent } from './user-id/user-id.component'

const routes: Routes = [
  { path: '',component: LoginSectionComponent },
  { path: 'users',component:DataSectionComponent },
  { path: 'users/:id',component: DataSectionComponent },
  // { path: 'users/:id', component: UserIdComponent },
  { path: 'selected',canActivate: [AuthGuard], component: SelectedUserComponent },
  { path: 'selected/:id', component: SelectedUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
