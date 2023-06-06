import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "src/app/core/enums/Gender";
import { Role } from "src/app/core/enums/Role";
import { Account } from "src/app/core/models/Account";
import { User } from "src/app/core/models/User";
import { AuthService } from "src/app/core/services/auth.service";
import { Login } from "src/app/core/models/Login";
import { HttpInterceptor } from "@angular/common/http";
import { of } from "rxjs";
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

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.user.emailOrPhone, Validators.required),
    password: new FormControl(this.user.password, Validators.required),
    rememberMe: new FormControl(this.user.rememberMe),
  });


  get email() { return this.loginForm.get("email"); }
  get password() { return this.loginForm.get("password"); }
  get rememberMe() { return this.loginForm.get("rememberMe") }

  login() {
    console.log(this.email?.value, this.password?.value, this.rememberMe?.value);

    this.authService.login(this.email?.value, this.password?.value, this.rememberMe?.value)
      .subscribe(next => {
        localStorage.setItem("accessToken", next["accessToken"]);
        localStorage.setItem("accessTokenLifeTime", next["accessTokenLifeTime"]);
        localStorage.setItem("isAuthenticated", next["isAuthenticated"]);
        localStorage.setItem("refreshToken", next["refreshToken"]);
        localStorage.setItem("refreshTokenLifeTime", next["refreshTokenLifeTime"]);
        console.log(next)

      }, error => console.log(error));

      
      if(this.isLoggedIn()){
          this.router.navigateByUrl("");
      }
      else{
        console.log("Access Denied");
      }
    // of(this.authService.login(this.email?.value, this.password?.value, this.rememberMe?.value)
    // ).subscribe({
    //   next: (v) => console.log({v: v}),
    //   error: (e) => console.error({e: e}),
    //   complete: () => console.info('complete')

    // })

 
  }
  isLoggedIn(){
    return this.authService.isLoggedIn();
  }
}
