import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing.module";
import { HomeComponent } from "./home.component";
import { HomeFilterComponent } from "./components/home-filter/home-filter.component";
import { CardsContainerComponent } from "./components/cards-container/cards-container.component";
import { FooterComponent } from './components/footer/footer.component';
import { HttpClient } from "@angular/common/http";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";

export function httpTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [HomeComponent, HomeFilterComponent, CardsContainerComponent, FooterComponent],
  imports: [CommonModule, HomeRoutingModule, TranslateModule.forRoot({
    defaultLanguage: "en",
    loader: {
      provide: TranslateLoader,
      useFactory: httpTranslateLoader,
      deps: [HttpClient]
    }
  })],
})
export class HomeModule { }
