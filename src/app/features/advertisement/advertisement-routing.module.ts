import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";

const routes: Routes = [
  { path: "search", component: SearchAdvertisementComponent },
  { path: "create", component: CreateAdvertisementComponent },
  { path: ":id", component: AdvertisementDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
