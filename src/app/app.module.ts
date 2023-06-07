import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { CoreModule } from "./core/core.module";
import { FeaturesModule } from "./features/features.module";

import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { LoaderComponent } from "./shared/components/loader/loader.component";

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from "@angular/common/http";
import { SharedModule } from "./shared/shared.module";
import { AuthGuard } from "./core/guards/auth.guard";

@NgModule({
  declarations: [AppComponent, NavbarComponent, LoaderComponent],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    CoreModule, 
    SharedModule,
    FeaturesModule, 
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}