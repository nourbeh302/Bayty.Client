import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CheckoutComponent } from "./checkout/checkout.component";
import { PaymentRoutingModule } from "./payment-routing.module";

@NgModule({
  declarations: [CheckoutComponent],
  imports: [CommonModule, PaymentRoutingModule],
})
export class PaymentModule { }
