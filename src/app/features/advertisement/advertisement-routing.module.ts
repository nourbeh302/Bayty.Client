import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";
import { UpdateAdvertisementComponent } from "./update-advertisement/update-advertisement.component";

const routes: Routes = [
  { path: "search", component: SearchAdvertisementComponent },
  { path: "create", component: CreateAdvertisementComponent },
  { path: ":id", component: AdvertisementDetailsComponent },
  { path: "update/:id", component: UpdateAdvertisementComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdvertisementRoutingModule {}
