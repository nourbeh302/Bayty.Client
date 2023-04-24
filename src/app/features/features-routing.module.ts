import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { AdvertisementModule } from "./advertisement/advertisement.module";

const routes: Routes = [
  { path: "", loadComponent: () => AuthModule },
  { path: "profile", loadChildren: () => ProfileModule },
  { path: "advertisement", loadChildren: () => AdvertisementModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
