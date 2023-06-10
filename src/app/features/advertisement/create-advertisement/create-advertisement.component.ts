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

@Component({
  selector: "app-create-advertisement",
  templateUrl: "./create-advertisement.component.html",
  styleUrls: ["./create-advertisement.component.css"],
})
export class CreateAdvertisementComponent {

  images: number[] = [];
  advertisement: Advertisement = new Advertisement(0, "", "", "", "", 0, 0, "", "", false, 0, 0, 0, false, false, false,
    new User(
      "", "", "", "", "", "", 0, "", "", 0
    ), "", PaymentType.Cash);

  constructor(
    private advertisementService: AdvertisementService,
    private authService: AuthService,
  ) { }

  postAdvertisementForm: FormGroup = new FormGroup({
    title: new FormControl(
      this.advertisement.title,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    description: new FormControl(
      this.advertisement.description,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    address: new FormControl(
      this.advertisement.address,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    city: new FormControl(
      this.advertisement.city,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    price: new FormControl(
      this.advertisement.price,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    roomsCount: new FormControl(
      this.advertisement.roomsCount,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    bathsCount: new FormControl(
      this.advertisement.bathsCount,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    creationDate: new FormControl(
      this.advertisement.creationDate,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    hasElevator: new FormControl(
      this.advertisement.hasElevator,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    numOfFlats: new FormControl(
      this.advertisement.numOfFlats,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    numOfFloors: new FormControl(
      this.advertisement.numOfFloors,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    floorNumber: new FormControl(
      this.advertisement.floorNumber,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    isFurnished: new FormControl(
      this.advertisement.isFurnished,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    isVitalSight: new FormControl(
      this.advertisement.isVitalSight,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    hasSwimming: new FormControl(
      this.advertisement.hasSwimming,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    propertyType: new FormControl(
      this.advertisement.propertyType,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
    paymentType: new FormControl(
      this.advertisement.paymentType,
      // Validators.compose([
      //   Validators.required,
      // ])
    ),
  });

  get title() { return this.postAdvertisementForm.get("title"); }
  get description() { return this.postAdvertisementForm.get("description"); }
  get address() { return this.postAdvertisementForm.get("address"); }
  get city() { return this.postAdvertisementForm.get("city"); }
  get price() { return this.postAdvertisementForm.get("price"); }
  get roomsCount() { return this.postAdvertisementForm.get("roomsCount"); }
  get bathsCount() { return this.postAdvertisementForm.get("bathsCount"); }
  get creationDate() { return this.postAdvertisementForm.get("creationDate"); }
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

  formData: FormData = new FormData()
  @ViewChild("imageToUpload") imageToUpload!: ElementRef

  // addImage(): void {
  //   this.images.push(1);
  // }

  // fileToUpload: File | null = null;

  // onFileSelected(event: any) {
  //   this.fileToUpload = event.target.files.item(0);
  //   console.log(event.target.files.item(0));

  //   this.images.push(event.target.files.item(0));
  // }

  onSubmit() {
    // e.preventDefault();
    // if (this.fileToUpload) {
    //   // TODO: Upload file to server
    //   console.log('File uploaded successfully');
    //   console.log(this.fileToUpload);
    // }

    const files = this.imageToUpload.nativeElement.files!;

    for (let i = 0; i < files.length; i++)
      this.formData.append(files[i].name, files[i])

    for (const key in this.postAdvertisementForm.value) {
      if (this.postAdvertisementForm.value[key] != null || this.postAdvertisementForm.value[key] != "") {
        this.formData.append(key, this.postAdvertisementForm.value[key])
      }
    }

    let postAdvertisement: PostAdvertisement = new PostAdvertisement(
      this.title?.value,
      this.description?.value,
      this.address?.value,
      this.city?.value,
      +this.price?.value,
      +this.roomsCount?.value,
      +this.bathsCount?.value,
      1,
      new Date().getDate().toString(),
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

    postAdvertisement.propertyType = PropertyType.Villa
    console.log(postAdvertisement);

    this.advertisementService.post(postAdvertisement).subscribe(next => console.log(next), err => console.log(err.message)
    )
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
