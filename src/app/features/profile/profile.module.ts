import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MyPropertiesComponent } from './my-properties/my-properties.component';
import { FavouritesComponent } from "./favourites/favourites.component";

@NgModule({
  declarations: [
    ProfileDetailsComponent,
    EditProfileComponent,
    FavouritesComponent,
    MyPropertiesComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule],
})
export class ProfileModule {}
