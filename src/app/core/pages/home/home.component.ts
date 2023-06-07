import { Component, OnInit } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {
  constructor(private _http: HttpClient, public translate: TranslateService) { }

  currentLang = 'en';

  switchLanguage() {
    this.currentLang = this.currentLang === 'en' ? 'ar' : 'en';
    this.translate.use(this.currentLang);
  }

  ngOnInit(): void { }

  // Form for sending filter form goes here
  searchAdvertisements(): any { }
}
