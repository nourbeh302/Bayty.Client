import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PrivacyComponent } from "./pages/privacy/privacy.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "privacy", component: PrivacyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
