import { Component } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})

export class AppComponent {
  title = "client";

  constructor(public translate: TranslateService) { }

  switchLanguage(event: any) {
    this.translate.use(event.target.value);
  }
}
