import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdvertisementRoutingModule } from "./advertisement-routing.module";

import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";

@NgModule({
  declarations: [
    CreateAdvertisementComponent,
    SearchAdvertisementComponent,
    AdvertisementDetailsComponent,
  ],
  imports: [CommonModule, AdvertisementRoutingModule],
})
export class AdvertisementModule {}
