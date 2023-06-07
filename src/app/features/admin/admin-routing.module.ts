import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UsersComponent } from './users/users.component';
import { RequestsComponent } from './requests/requests.component';

const routes: Routes = [
  { path: "", component: DashboardComponent },
  { path: "users", component: UsersComponent },
  { path: "requests", component: RequestsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
