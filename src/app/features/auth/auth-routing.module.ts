import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { VerifyPhoneNumberComponent } from "./verify-phone-number/verify-phone-number.component";
import { CreateEnterpriseComponent } from "./create-enterprise/create-enterprise.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent },
  { path: "verifyEmail", component: VerifyEmailComponent },
  { path: "verifyPhoneNumber", component: VerifyPhoneNumberComponent },
  { path: "createEnterprise", component: CreateEnterpriseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
