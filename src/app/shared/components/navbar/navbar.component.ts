import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {
  isUserLoggedIn: boolean = false;
  isNavbarCollapseToggled: boolean = false;
  
  currentLang = 'en';

  toggleNavbarCollapse: Function = () =>
    (this.isNavbarCollapseToggled = !this.isNavbarCollapseToggled);

  constructor(public translate: TranslateService) { }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void { }
}
