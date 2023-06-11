import { Component, ElementRef, ViewChild } from "@angular/core";
import { AdvertisementService } from "src/app/core/services/advertisement.service";
import {
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Advertisement } from "src/app/core/models/Advertisement";
import { PaymentType } from "src/app/core/enums/PaymentType";
import { User } from "src/app/core/models/User";
import { PostAdvertisement } from "src/app/core/models/PostAdvertisement";
import { AuthService } from "src/app/core/services/auth.service";
import { PropertyType } from "src/app/core/enums/PropertyType";
import { HttpErrorResponse } from "@angular/common/http";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-advertisement",
  templateUrl: "./create-advertisement.component.html",
  styleUrls: ["./create-advertisement.component.css"],
})
export class CreateAdvertisementComponent {

  selectedPropertyType: string = ""

  images: number[] = [];
  advertisement: Advertisement = new Advertisement(0, "", "", "", "", 0, 0, "", "", false, 0, 0, 0, false, false, false, "", "", PaymentType.Cash);

  constructor(
    private advertisementService: AdvertisementService,
    private authService: AuthService,
    private router: Router
  ) { }

  postAdvertisementForm: FormGroup = new FormGroup({
    title: new FormControl(this.advertisement.title),
    description: new FormControl(this.advertisement.description),
    address: new FormControl(this.advertisement.address),
    city: new FormControl(this.advertisement.city),
    price: new FormControl(this.advertisement.price),
    roomsCount: new FormControl(this.advertisement.roomsCount),
    bathsCount: new FormControl(this.advertisement.bathsCount),
    hasElevator: new FormControl(this.advertisement.hasElevator),
    numOfFlats: new FormControl(this.advertisement.numOfFlats),
    numOfFloors: new FormControl(this.advertisement.numOfFloors),
    floorNumber: new FormControl(this.advertisement.floorNumber),
    isFurnished: new FormControl(this.advertisement.isFurnished),
    isVitalSight: new FormControl(this.advertisement.isVitalSight),
    hasSwimming: new FormControl(this.advertisement.hasSwimming),
    propertyType: new FormControl(this.advertisement.propertyType),
    paymentType: new FormControl(this.advertisement.paymentType),
  });

  get title() { return this.postAdvertisementForm.get("title"); }
  get description() { return this.postAdvertisementForm.get("description"); }
  get address() { return this.postAdvertisementForm.get("address"); }
  get city() { return this.postAdvertisementForm.get("city"); }
  get price() { return this.postAdvertisementForm.get("price"); }
  get roomsCount() { return this.postAdvertisementForm.get("roomsCount"); }
  get bathsCount() { return this.postAdvertisementForm.get("bathsCount"); }
  get hasElevator() { return this.postAdvertisementForm.get("hasElevator"); }
  get numOfFlats() { return this.postAdvertisementForm.get("numOfFlats"); }
  get numOfFloors() { return this.postAdvertisementForm.get("numOfFloors"); }
  get floorNumber() { return this.postAdvertisementForm.get("floorNumber"); }
  get isFurnished() { return this.postAdvertisementForm.get("isFurnished"); }
  get isVitalSight() { return this.postAdvertisementForm.get("isVitalSight"); }
  get hasSwimming() { return this.postAdvertisementForm.get("hasSwimming"); }
  get user() { return this.postAdvertisementForm.get("user"); }
  get propertyType() { return this.postAdvertisementForm.get("propertyType"); }
  get paymentType() { return this.postAdvertisementForm.get("paymentType"); }

  @ViewChild("imageToUpload") imageToUpload!: ElementRef

  onSubmit() {
    const formData = new FormData()
    let files = this.imageToUpload.nativeElement.files!;

    let postAdvertisement: PostAdvertisement = new PostAdvertisement(
      this.title?.value,
      this.description?.value,
      this.address?.value,
      this.city?.value,
      +this.price?.value,
      +this.roomsCount?.value,
      +this.bathsCount?.value,
      1,
      Boolean(this.hasElevator?.value),
      +this.numOfFlats?.value,
      +this.numOfFloors?.value,
      +this.floorNumber?.value,
      Boolean(this.isFurnished?.value),
      Boolean(this.isVitalSight?.value),
      Boolean(this.hasSwimming?.value),
      localStorage.getItem("userId")!,
      this.propertyType?.value,
      this.paymentType?.value,
    )

    formData.append("title", this.title?.value)
    formData.append("description", this.description?.value)
    formData.append("address", this.address?.value)
    formData.append("city", this.city?.value)
    formData.append("price", this.price?.value)
    formData.append("userId", localStorage.getItem("userId")!)
    formData.append("propertyType", this.propertyType?.value)
    formData.append("paymentType", this.paymentType?.value)
    formData.append("roomsCount", this.roomsCount?.value)
    formData.append("bathroomsCount", this.bathsCount?.value)

    if (this.propertyType?.value == 'villa') {
      formData.append("hasSwimmingPool", this.hasSwimming?.value)
    }

    if (this.propertyType?.value == 'apartment') {
      formData.append("floorNumber", this.floorNumber?.value)
      formData.append("isFurnished", this.isFurnished?.value)
      formData.append("isVitalSite", this.isVitalSight?.value)
      formData.append("hasElevator", this.hasElevator?.value)
    }

    if (this.propertyType?.value == 'building') {
      formData.append("hasElevator", this.hasElevator?.value)
      formData.append("numberOfFlats", this.numOfFlats?.value)
      formData.append("numberOfFloors", this.numOfFloors?.value)
    }

    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i])
    }

    this.advertisementService.post(formData).subscribe(next => console.log(next), (err: HttpErrorResponse) => {
      console.log(err.error)
      if (err.status === 400) {
        // Model is incomplete
      }
      if (err.status === 401) {
        // Error message: user should be email and phonenumber
      }
      if (err.status === 403) {
        // Exceeded number of posts per user
      }
      if (err.status === 500) {
        // Server error
      }
    })

    this.router.navigate([''])
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
