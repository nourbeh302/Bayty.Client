import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { AdvertisementModule } from "./advertisement/advertisement.module";
import { PaymentModule } from "./payment/payment.module";
import { ChatModule } from "./chat/chat.module";
import { NotificationsModule } from "./notifications/notifications.module";

const routes: Routes = [
  { path: "", loadComponent: () => AuthModule },
  { path: "profile", loadChildren: () => ProfileModule },
  { path: "advertisement", loadChildren: () => AdvertisementModule },
  { path: "payment", loadChildren: () => PaymentModule },
  { path: "chat", loadChildren: () => ChatModule },
  { path: "notifications", loadChildren: () => NotificationsModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
