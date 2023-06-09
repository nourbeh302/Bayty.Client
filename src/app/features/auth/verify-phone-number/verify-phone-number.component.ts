import { Component } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-verify-phone-number",
  templateUrl: "./verify-phone-number.component.html",
  styleUrls: ["./verify-phone-number.component.css"],
})
export class VerifyPhoneNumberComponent {
  isOTPToggled: boolean = false;

  digit01: string = ""
  digit02: string = ""
  digit03: string = ""
  digit04: string = ""
  digit05: string = ""
  digit06: string = ""

  constructor(private authService: AuthService) { }

  toggleOTPInput: Function = () => this.isOTPToggled = !this.isOTPToggled;

  askForPhoneNumberVerification() {
    this.toggleOTPInput();
    this.authService.askForPhoneNumberVerification().subscribe(next => {
      console.log(next);
    }, error => console.log(error.message))
  }

  verifyPhoneNumber() {
    var token = `${this.digit01}${this.digit02}${this.digit03}${this.digit04}${this.digit05}${this.digit06}`
    this.authService.verifyPhoneNumber(token).subscribe(next => {
      // Redirect to Phone Verification completed
      console.log(next);
    }, error => console.log(error.message))
  }
}