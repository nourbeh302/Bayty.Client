import { Component, OnInit } from "@angular/core";
import { AccountType } from "src/app/core/enums/AccountType";
import { Account } from "src/app/core/models/Account";
import { AuthService } from "src/app/core/services/auth.service";

@Component({
  selector: "app-profile-details",
  templateUrl: "./profile-details.component.html",
  styleUrls: ["./profile-details.component.css"],
})
export class ProfileDetailsComponent implements OnInit {
  constructor(private authService: AuthService) { }

  account: Account = new Account(
    "",
    "",
    "",
    "",
    "",
    "",
    null,
    AccountType.Personal,
    "",
    "",
    0,
  )

  ngOnInit(): void {
    var userId = localStorage.getItem('userId');
    userId && this.authService.getProfile(userId)
      .subscribe(next => {
        
        const typeToAccountType: any = {
          0: AccountType.Personal,
          1: AccountType.Admin,
          2: AccountType.Enterprise,
        };
        
        this.account.accountType = typeToAccountType[next['type']] || this.account.accountType;
        
        this.account.email = next['email']
        this.account.password = next['password']
        this.account.firstName = next['firstName']
        this.account.lastName = next['lastName']
        this.account.profileImage = next['profileImage']
        this.account.imagePath = next['imagePath']
        this.account.address = next['address']
        this.account.phoneNumber = next['phoneNumber']
        this.account.age = next['age']
      });
  }
}
