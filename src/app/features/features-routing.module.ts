import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthModule } from "./auth/auth.module";
import { ProfileModule } from "./profile/profile.module";
import { AdvertisementModule } from "./advertisement/advertisement.module";
import { PaymentModule } from "./payment/payment.module";
import { ChatModule } from "./chat/chat.module";
import { NotificationsModule } from "./notifications/notifications.module";
import { AdminModule } from "./admin/admin.module";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
  { path: "", loadComponent: () => AuthModule },
  { path: "profile", loadChildren: () => ProfileModule, canActivate: [AuthGuard] },
  { path: "advertisement", loadChildren: () => AdvertisementModule },
  { path: "payment", loadChildren: () => PaymentModule, canActivate: [AuthGuard] },
  { path: "chat", loadChildren: () => ChatModule, canActivate: [AuthGuard] },
  { path: "notifications", loadChildren: () => NotificationsModule, canActivate: [AuthGuard] },
  { path: "admin", loadChildren: () => AdminModule },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule { }
