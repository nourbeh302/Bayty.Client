import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AuthService } from "src/app/core/services/auth.service";
import { Login } from "src/app/core/models/Login";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {

  user: Login = new Login("", "", false);

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void { }

  /* Form components */
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.user.emailOrPhone, Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl(this.user.password, Validators.compose([
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ])),
    rememberMe: new FormControl(this.user.rememberMe),
  });

  /* Getters and setters */
  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }
  get rememberMe() { return this.loginForm.get("rememberMe") }

  /* Component methods */
  login() {
    if (this.loginForm.valid) {
      this.authService.login(this.email?.value, this.password?.value, this.rememberMe?.value)
      .subscribe(
        (next) => {
          console.log(next);
          
          // Handle successful login here
          this.router.navigate(["/"])
          this.authService.saveCredentials(next)
        },
        (error) => this.loginForm.setErrors({ 'invalidCredentials': true }) // Handle error here
      );
    }
  }

  isLoggedIn() {
    return this.authService.getIsLoggedIn();
  }
}
