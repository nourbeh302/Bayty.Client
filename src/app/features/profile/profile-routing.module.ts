import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ProfileDetailsComponent } from "./profile-details/profile-details.component";
import { EditProfileComponent } from "./edit-profile/edit-profile.component";
import { MyTransactionsComponent } from "./my-transactions/my-transactions.component";
import { MyVCardComponent } from "./my-vcard/my-vcard.component";

const routes: Routes = [
  { path: "", component: ProfileDetailsComponent },
  { path: "edit", component: EditProfileComponent },
  { path: "transactions", component: MyTransactionsComponent },
  { path: "vCard", component: MyVCardComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
