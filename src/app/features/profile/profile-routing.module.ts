import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { FavouritesComponent } from "./favourites/favourites.component";
import { MyPropertiesComponent } from "./my-properties/my-properties.component";

const routes: Routes = [
  { path: "", component: ProfileDetailsComponent },
  { path: "edit", component: EditProfileComponent },
  { path: "favourites", component: FavouritesComponent },
  { path: "myProperties", component: MyPropertiesComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule { }
