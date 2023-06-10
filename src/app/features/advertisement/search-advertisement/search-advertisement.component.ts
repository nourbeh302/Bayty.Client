import { Component, OnInit } from "@angular/core";
import { Advertisement } from "src/app/core/models/Advertisement";
import { AdvertisementService } from "src/app/core/services/advertisement.service";

@Component({
  selector: "app-search-advertisement",
  templateUrl: "./search-advertisement.component.html",
  styleUrls: ["./search-advertisement.component.css"],
})
export class SearchAdvertisementComponent {
  advertisements: Advertisement[] = [];

  /**
   *
   */
  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.advertisementService.getAll()
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }
}
