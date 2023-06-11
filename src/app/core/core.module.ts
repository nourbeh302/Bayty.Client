import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClient, HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "./core-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { NotFoundModule } from "./pages/not-found/not-found.module";
import { BeAwareOfComponent } from './pages/be-aware-of/be-aware-of.component';
import { AuthGuard } from "./guards/auth.guard";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

@NgModule({
  declarations: [
    BeAwareOfComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CoreRoutingModule,
    HomeModule,
    NotFoundModule,
    TranslateModule.forRoot({
      defaultLanguage: "en",
      loader: {
        provide: TranslateLoader,
        useFactory: httpTranslateLoader,
        deps: [HttpClient]
      }
    })
  ],
  exports: [HttpClientModule],
  providers: [AuthGuard]
})
export class CoreModule { }

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
