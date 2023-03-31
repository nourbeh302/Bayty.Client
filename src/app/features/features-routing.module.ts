import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  { path: "", loadComponent: () => AuthModule },
  { path: "profile", loadChildren: () => ProfileModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
