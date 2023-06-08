import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-verify-phone-number",
  templateUrl: "./verify-phone-number.component.html",
  styleUrls: ["./verify-phone-number.component.css"],
})
export class VerifyPhoneNumberComponent {
  isOTPToggled: boolean = false;

  constructor(private authService: AuthService) { }

  toggleOTPInput: Function = () => this.isOTPToggled = !this.isOTPToggled

  sendOTPCode() {
    this.authService.sendOTPCode().subscribe(next => {
      this.toggleOTPInput();
      console.log(next);
    }, error => console.log(error))

    // this.authService.sendOTPCode().subscribe(next => {
    //   console.log(next);
    //   this.isOTPToggled = !this.isOTPToggled
    // })
  }
}