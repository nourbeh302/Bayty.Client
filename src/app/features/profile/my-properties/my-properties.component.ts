import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { Advertisement } from "src/app/core/models/Advertisement";
import { AdvertisementService } from 'src/app/core/services/advertisement.service';

@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent {

  advertisements: Advertisement[] = []

  constructor(private advertisementService: AdvertisementService) { }

  ngOnInit(): void {
    this.getMyProperties()
  }

  getMyProperties() {
    var userId = localStorage.getItem("userId")
    var advertisements = this.advertisementService.getAll()
    return advertisements.subscribe(next => {
      this.advertisements = next.filter(advertisement => advertisement.userId == userId)
      console.log(this.advertisements);
      
    }, (err: HttpErrorResponse) => console.log(err.error)
    )
  }
}
