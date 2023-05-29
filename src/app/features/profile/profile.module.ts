import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ProfileRoutingModule } from "./profile-routing.module";
import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { ReactiveFormsModule } from "@angular/forms";
import { MyTransactionsComponent } from "./my-transactions/my-transactions.component";
import { MyVCardComponent } from "./my-vcard/my-vcard.component";
import { TransactionItemComponent } from './my-transactions/components/transaction-item/transaction-item.component';

@NgModule({
  declarations: [
    ProfileDetailsComponent,
    EditProfileComponent,
    MyTransactionsComponent,
    MyVCardComponent,
    TransactionItemComponent,
  ],
  imports: [CommonModule, ProfileRoutingModule, ReactiveFormsModule],
})
export class ProfileModule {}
