import { Component } from "@angular/core";

@Component({
  selector: "app-create-advertisement",
  templateUrl: "./create-advertisement.component.html",
  styleUrls: ["./create-advertisement.component.css"],
})
export class CreateAdvertisementComponent {
  imageContainers: number[] = [];

  addImage(): void {
    this.imageContainers.push(1);
  }

  fileToUpload: File | null = null;

  onFileSelected(event: any) {
    this.fileToUpload = event.target.files.item(0);
  }

  onSubmit(e: any) {
    e.preventDefault();
    if (this.fileToUpload) {
      // TODO: Upload file to server
      console.log('File uploaded successfully');
      console.log(this.fileToUpload);
    }
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
