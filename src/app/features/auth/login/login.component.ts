import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "src/app/core/enums/Gender";
import { Role } from "src/app/core/enums/Role";
import { Account } from "src/app/core/models/Account";
import { User } from "src/app/core/models/User";
import { AuthService } from "src/app/core/services/auth.service";
import { Login } from "src/app/core/models/Login";
import { HttpInterceptor } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: Login = new Login("", "");

  constructor(private authService: AuthService) {}


  // userList: User[] = [
  //   {
  //     email: "nourbeh@gm.com",
  //     password: "12345678",
  //     profileImage: "",
  //     firstName: "Nour",
  //     lastName: "Samir",
  //     phoneNumber: "0100 000 0000",
  //     address: "",
  //     age: 21,
  //   },
  //   {
  //     role: Role.User,
  //     email: "sallygmal@gm.com",
  //     password: "sosojimmy",
  //     profileImage: "",
  //     firstName: "Sally",
  //     lastName: "Samal",
  //     phoneNumber: "0110 000 0000",
  //     gender: Gender.Female,
  //     address: "",
  //     age: 32,
  //   },
  // ];

  name: FormControl = new FormControl();
  nameState: string = "";

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.user.emailOrPhone, Validators.required),
    password: new FormControl(this.user.password, Validators.required),
  });


  ngOnInit(): void {}

  validateUser: Function = (email: string, password: string): void => {
    // const loggedInUser = this.userList.find(
    //   (u) =>
    //     this.loginForm.value.email == u.email &&
    //     this.loginForm.value.password == u.password
    // );

    // console.log(loggedInUser ? "valid" : "invalid");
  };

  get email() {
    return this.loginForm.get("email");
  }
  
  get password() {
    return this.loginForm.get("password");
  }
  // get rememberMe(){
  //   return this.loginForm.get("rememberMe")
  // }

  login() {
    this.authService.login(this.email?.value, this.password?.value)
    .subscribe(next => {
      
    }, error => console.log(error));
  }
}
