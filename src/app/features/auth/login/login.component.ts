import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { Gender } from "src/app/core/enums/Gender";
import { Role } from "src/app/core/enums/Role";
import { User } from "src/app/core/models/User";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  user: User = new User("", "", "", 0);

  userList: User[] = [
    {
      userId: "1",
      role: Role.User,
      email: "nourbeh@gm.com",
      password: "12345678",
      profileImage: "",
      firstName: "Nour",
      lastName: "Samir",
      phoneNumber: "0100 000 0000",
      gender: Gender.Male,
      address: "",
      age: 21,
    },
    {
      userId: "2",
      role: Role.User,
      email: "sallygmal@gm.com",
      password: "sosojimmy",
      profileImage: "",
      firstName: "Sally",
      lastName: "Samal",
      phoneNumber: "0110 000 0000",
      gender: Gender.Female,
      address: "",
      age: 32,
    },
  ];

  name: FormControl = new FormControl();
  nameState: string = "";

  loginForm: FormGroup = new FormGroup({
    email: new FormControl(this.user.email, Validators.required),
    password: new FormControl(this.user.password, Validators.required),
  });

  constructor(private authService: AuthService) {}

  ngOnInit(): void {}

  validateUser: Function = (email: string, password: string): void => {
    const loggedInUser = this.userList.find(
      (u) =>
        this.loginForm.value.email == u.email &&
        this.loginForm.value.password == u.password
    );

    console.log(loggedInUser ? "valid" : "invalid");
  };

  get email() {
    return this.loginForm.get("email");
  }
  
  get password() {
    return this.loginForm.get("password");
  }

  login() {
    this.authService.login(this.email?.value, this.password?.value);
  }
}
