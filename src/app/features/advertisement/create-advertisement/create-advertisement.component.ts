import { Component } from "@angular/core";
import { AdvertisementService } from "src/app/core/services/advertisement.service";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Advertisment } from "src/app/core/models/Advertisement";
import { Account } from "src/app/core/models/Account";
import { PaymentType } from "src/app/core/enums/PaymentType";

@Component({
  selector: "app-create-advertisement",
  templateUrl: "./create-advertisement.component.html",
  styleUrls: ["./create-advertisement.component.css"],
})
export class CreateAdvertisementComponent {
  images: number[] = [];
  constructor(private _advertisementService: AdvertisementService, private user: Account){}

  
  ad: Advertisment = new Advertisment("", "", "", "", 0, 0, "", "", false, 0, 0, 0, false, false, false, this.user, "", PaymentType.Cash);



  addImage(): void {
    this.images.push(1);
  }

  fileToUpload: File | null = null;

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
    console.log(event.target.files.item(0));
    
    this.images.push(event.target.files.item(0));
  }

  onSubmit() {
    // e.preventDefault();
    // if (this.fileToUpload) {
    //   // TODO: Upload file to server
    //   console.log('File uploaded successfully');
    //   console.log(this.fileToUpload);
    // }

    this._advertisementService.post(this.ad)
      .subscribe(next => {
        console.log(next);
      }, error => console.log(error));
  }
}

/* 
var Thunderforest_Outdoors = L.tileLayer('https://{s}.tile.thunderforest.com/outdoors/{z}/{x}/{y}.png?apikey={apikey}', {
  attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  apikey: '<your apikey>',
  maxZoom: 22
});

var OpenStreetMap_Mapnik = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

var Stadia_OSMBright = L.tileLayer('https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png', {
  maxZoom: 20,
  attribution: '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors'
});
*/
