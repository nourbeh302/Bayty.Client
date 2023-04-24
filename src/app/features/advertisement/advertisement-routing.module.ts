import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";

const routes: Routes = [
  { path: "search", component: SearchAdvertisementComponent },
  { path: "create", component: CreateAdvertisementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
