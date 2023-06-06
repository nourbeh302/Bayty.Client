import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Gender } from "src/app/core/enums/Gender";
import { Role } from "src/app/core/enums/Role";

import { User } from "src/app/core/models/User";
import { Account } from "src/app/core/models/Account";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  user: Account = new Account("", "", "","","","",0,"","",0);

  genderReference = Gender;
  enumKeys: string[] = [];

  constructor(private _authService : AuthService) {
    this.enumKeys = Object.keys(this.genderReference);
  }

  registerForm: FormGroup = new FormGroup({
    profileImage: new FormGroup(this.user.profileImage),
    firstName: new FormControl(
      this.user.firstName,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32),
      ])
    ),
    lastName: new FormControl(
      this.user.lastName,
      Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(32),
      ])
    ),
    email: new FormControl(
      this.user.email,
      Validators.compose([Validators.required, Validators.email])
    ),
    password: new FormControl(
      this.user.password,
      Validators.compose([
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ])
    ),
    phoneNumber: new FormControl(
      this.user.phoneNumber,
      Validators.compose([
        Validators.required,
        Validators.minLength(11),
        Validators.maxLength(11),
      ])
    ) /* ^01[0125][0-9]{8}$ Phone number regex */,
    address: new FormControl(this.user.address),
    age: new FormControl(
      this.user.age,
      Validators.compose([
        // Validators.min(21),
      ])
    ),
    // gender: new FormControl(this.user.gender),
  });

  get firstName() {
    return this.registerForm.get("firstName");
  }
  get lastName() {
    return this.registerForm.get("lastName");
  }
  get email() {
    return this.registerForm.get("email");
  }
  get password() {
    return this.registerForm.get("password");
  }
  get phoneNumber() {
    return this.registerForm.get("phoneNumber");
  }
  get address() {
    return this.registerForm.get("address");
  }
  get age() {
    return this.registerForm.get("age");
  }
  get gender() {
    return this.registerForm.get("gender")?.value;
  }

  changeGender: Function = (event: any): void =>
    (this.registerForm.value.gender = event.target.value);

  register() {
    // e.preventDefault();
    // 
    // this.user = new User(
    //   this.firstName?.value,
    //   this.lastName?.value,
    //   this.age?.value,
    //   this.gender.value
    //   );
      this._authService.register(this.registerForm.value)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));    
    // console.log(this.registerForm.value);
  }

  ngOnInit(): void {
    console.log(this.registerForm.value.profileImage);
  }

  onImgSelected: Function = (event: any): void => {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) =>
        (this.registerForm.value.profileImage = e.target.result);
    }
  };
}