import { Component, OnInit } from "@angular/core";
import { Advertisement } from "src/app/core/models/Advertisement";
import { AdvertisementService } from "src/app/core/services/advertisement.service";

@Component({
  selector: "app-search-advertisement",
  templateUrl: "./search-advertisement.component.html",
  styleUrls: ["./search-advertisement.component.css"],
})
export class SearchAdvertisementComponent {
  pageSize: number = 8
  pageNumber: number = 1
  advertisements: Advertisement[] = [];

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit() {
    this.advertisementService.searchAdvertisement(this.pageSize, this.pageNumber, "Cairo", 100, 4000)
      .subscribe(next => {
        console.log(next);
      }, error => {
        console.log(error);
      });
  }
}
