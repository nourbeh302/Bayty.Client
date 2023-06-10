import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdvertisementRoutingModule } from "./advertisement-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";
import { UpdateAdvertisementComponent } from './update-advertisement/update-advertisement.component';

@NgModule({
  declarations: [
    CreateAdvertisementComponent,
    SearchAdvertisementComponent,
    AdvertisementDetailsComponent,
    UpdateAdvertisementComponent,
  ],
  imports: [CommonModule, AdvertisementRoutingModule, FormsModule, ReactiveFormsModule],
})
export class AdvertisementModule {}
