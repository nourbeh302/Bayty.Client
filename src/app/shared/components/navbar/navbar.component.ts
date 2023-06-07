import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { AuthService } from "src/app/core/services/auth.service";
import { ThemeService } from "src/app/core/services/dark-mode.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"],
})
export class NavbarComponent implements OnInit {

  isUserLoggedIn: boolean = false;

  isNavbarCollapseToggled: boolean = false;

  theme: object = {
    dark: "Dark",
    light: "Light"
  }

  currentLang = 'en';

  toggleNavbarCollapse: Function = () =>
    (this.isNavbarCollapseToggled = !this.isNavbarCollapseToggled);

  constructor(public translate: TranslateService, private themeService: ThemeService, private authService: AuthService) { }

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void {
    this.authService.isLoggedIn()
      .subscribe((next) => this.isUserLoggedIn = next, (err) => console.log(err)
      )
    this.setColorScheme('light');
  }

  signOut() {
    this.authService.logout()
  }

  toggleDarkMode() {
    this.themeService.toggleColorScheme();
  }

  setColorScheme(arg0: string) {
    this.themeService.setColorScheme(arg0);
  }
}
