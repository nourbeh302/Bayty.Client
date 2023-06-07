import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "./core-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { NotFoundModule } from "./pages/not-found/not-found.module";
import { PrivacyComponent } from './pages/privacy/privacy.component';
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    PrivacyComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    CoreRoutingModule,
    HomeModule,
    NotFoundModule,
  ],
  exports: [HttpClientModule],
  providers: [AuthGuard]
})
export class CoreModule { }
