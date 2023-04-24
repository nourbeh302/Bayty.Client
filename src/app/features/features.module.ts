import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, AuthModule, ProfileModule],
})
export class FeaturesModule {}
