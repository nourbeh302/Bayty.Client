import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";

import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoaderComponent],
  imports: [BrowserModule, AppRoutingModule, CoreModule, FeaturesModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
