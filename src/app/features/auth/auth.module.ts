import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AuthRoutingModule } from "./auth-routing.module";
import { LoginComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { VerifyEmailComponent } from "./verify-email/verify-email.component";
import { VerifyPhoneNumberComponent } from "./verify-phone-number/verify-phone-number.component";
import { CreateEnterpriseComponent } from './create-enterprise/create-enterprise.component';
import { RegisterationCompletedComponent } from './registeration-completed/registeration-completed.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';
import { CreateNewPasswordComponent } from './create-new-password/create-new-password.component';
import { CreateRoleComponent } from './create-role/create-role.component';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    VerifyEmailComponent,
    VerifyPhoneNumberComponent,
    VerifyPhoneNumberComponent,
    CreateEnterpriseComponent,
    RegisterationCompletedComponent,
    ResetPasswordComponent,
    CreateNewPasswordComponent,
    CreateRoleComponent,
  ],
  imports: [CommonModule, AuthRoutingModule, ReactiveFormsModule, FormsModule],
})
export class AuthModule {}
