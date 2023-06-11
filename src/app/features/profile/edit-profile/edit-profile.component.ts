import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AccountType } from "src/app/core/enums/AccountType";
import { Gender } from "src/app/core/enums/Gender";
import { Account } from "src/app/core/models/Account";

import { User } from "src/app/core/models/User";

@Component({
  selector: "app-edit-profile",
  templateUrl: "./edit-profile.component.html",
  styleUrls: ["./edit-profile.component.css"],
})
export class EditProfileComponent implements OnInit {
  user: Account = new Account("", "", "", "", "", "", null, AccountType.Personal, "", "", 0);

  constructor() { }

  editProfileForm: FormGroup = new FormGroup({
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
    age: new FormControl(this.user.age),
  });

  // Update only firstName, lastName, and Address

  get firstName() {
    return this.editProfileForm.get("firstName");
  }
  get lastName() {
    return this.editProfileForm.get("lastName");
  }
  get email() {
    return this.editProfileForm.get("email");
  }
  get password() {
    return this.editProfileForm.get("password");
  }
  get phoneNumber() {
    return this.editProfileForm.get("phoneNumber");
  }
  get address() {
    return this.editProfileForm.get("address");
  }
  get age() {
    return this.editProfileForm.get("age");
  }
  get gender() {
    return this.editProfileForm.get("gender")?.value;
  }

  changeGender: Function = (event: any): void =>
    (this.editProfileForm.value.gender = event.target.value);

  printUser(e: Event) {
    // e.preventDefault();
    // this._http.post<any>('https://localhost:7094/account/register', { accountType: "Personal", ...this.editProfileForm.value })
    //   .subscribe(next => {
    //     console.log(next);
    //   }, error => {
    //     console.log(error);
    //   });

    console.log(this.editProfileForm.value);
  }

  ngOnInit(): void {
    console.log(this.editProfileForm.value.profileImage);
  }

  onImgSelected: Function = (event: any): void => {
    if (event.target.files) {
      let reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (e: any) =>
        (this.editProfileForm.value.profileImage = e.target.result);
    }
  };
}
