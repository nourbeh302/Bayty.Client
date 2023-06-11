import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { AuthService } from "src/app/core/services/auth.service";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { AccountType } from "src/app/core/enums/AccountType";

import { Account } from "src/app/core/models/Account";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"],
})
export class RegisterComponent implements OnInit {
  personalImage: Blob = new Blob()
  user: Account = new Account("", "", "", "", "", "", this.personalImage, AccountType.Personal, "", "", 0);
  
  @ViewChild("imageToUpload") imageToUpload!: ElementRef

  constructor(private _authService: AuthService) { }

  registerForm: FormGroup = new FormGroup({
    profileImage: new FormGroup(""),
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

  register() {
    this.personalImage = this.imageToUpload.nativeElement.files[0]
    this._authService.register(this.registerForm.value, this.personalImage)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }

  ngOnInit(): void {
    console.log(this.registerForm.value.profileImage);
  }

  onImgSelected: Function = (): void => {
    console.log(this.imageToUpload.nativeElement.files[0]);
    
    if (this.imageToUpload.nativeElement.files[0]) {
      let reader = new FileReader();
      reader.readAsDataURL(this.imageToUpload.nativeElement.files[0]);
      reader.onload = (e: any) =>
      {console.log(e);
      
        (this.registerForm.value.profileImage = e.target.result);}
    }
  };
}