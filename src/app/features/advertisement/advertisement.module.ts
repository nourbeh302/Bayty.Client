import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AdvertisementRoutingModule } from "./advertisement-routing.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { CreateAdvertisementComponent } from "./create-advertisement/create-advertisement.component";
import { SearchAdvertisementComponent } from "./search-advertisement/search-advertisement.component";
import { AdvertisementDetailsComponent } from "./advertisement-details/advertisement-details.component";
import { UpdateAdvertisementComponent } from './update-advertisement/update-advertisement.component';
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    CreateAdvertisementComponent,
    SearchAdvertisementComponent,
    AdvertisementDetailsComponent,
    UpdateAdvertisementComponent,
  ],
  imports: [CommonModule, AdvertisementRoutingModule, FormsModule, ReactiveFormsModule, TranslateModule.forRoot({
    defaultLanguage: "en",
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient]
    }
  })],
})
export class AdvertisementModule {}
