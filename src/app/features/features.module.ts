import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { FeaturesRoutingModule } from "./features-routing.module";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { PaymentModule } from "./payment/payment.module";
import { ChatModule } from "./chat/chat.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { AdminModule } from "./admin/admin.module";

@NgModule({
  declarations: [],
  imports: [CommonModule, FeaturesRoutingModule, AuthModule, ProfileModule, PaymentModule, ChatModule, NotificationsModule, AdminModule],
})
export class FeaturesModule {}
