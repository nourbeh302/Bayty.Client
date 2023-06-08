import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { CoreRoutingModule } from "./core-routing.module";
import { HomeModule } from "./pages/home/home.module";
import { NotFoundModule } from "./pages/not-found/not-found.module";
import { PoliciesComponent } from './pages/policies/policies.component';
import { AuthGuard } from "./guards/auth.guard";

@NgModule({
  declarations: [
    PoliciesComponent
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
