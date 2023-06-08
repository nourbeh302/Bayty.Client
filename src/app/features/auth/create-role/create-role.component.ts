import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { User } from 'src/app/clients/user/models/User';
// import { UserService } from 'src/app/clients/user/services/user.service';

@Component({
  selector: 'app-create-role',
  templateUrl: './create-role.component.html',
  styleUrls: ['./create-role.component.css']
})
export class CreateRoleComponent implements OnInit {

  // @Input() user: User

  constructor(/* private userService: UserService ,*/ private route: Router) {
    // this.user = this.userService.getUser()
  }

  ngOnInit(): void {
    // this.user = this.userService.getUser()
  }

  assignRole(role: string): void {
    // this.userService.setRole(role)
    // Go to next step
    if (role == 'Corporation'.toLocaleLowerCase())
      this.navigateToCreateCorporationPage() 
    else
      this.navigateToCreateUserPage()
  }
  
  navigateToCreateUserPage(): void {
    this.route.navigate(['/register/createUser'], { /* state: this.user */ })
  }
  
  navigateToCreateCorporationPage(): void {
    this.route.navigate(['/register/createCorporation'], { /* state: this.user */ })
  }

}