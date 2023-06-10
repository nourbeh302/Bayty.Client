import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { BeAwareOfComponent } from "./pages/be-aware-of/be-aware-of.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "beAwareOf", component: BeAwareOfComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class CoreRoutingModule { }
