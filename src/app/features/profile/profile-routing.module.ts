import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";

const routes: Routes = [
  { path: "", component: ProfileDetailsComponent },
  { path: "edit", component: EditProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
