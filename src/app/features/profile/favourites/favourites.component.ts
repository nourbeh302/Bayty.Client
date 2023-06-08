import { Component } from "@angular/core";
import { Transaction } from "src/app/core/models/Transaction";

@Component({
  selector: "app-favourites",
  templateUrl: "./favourites.component.html",
  styleUrls: ["./favourites.component.css"],
})
export class FavouritesComponent {
  currentDate = new Date();
  formatter = new Intl.DateTimeFormat('en-UK', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
  });
  formattedDate: string = this.formatter.format(this.currentDate).toLocaleUpperCase();

  generateUuid(): string {
    return Math.ceil(Math.random() * 100000).toString()
  }

  favourites: Transaction[] = [
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'cancelled' },
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'completed' },
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'cancelled' },
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'draft' },
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'pending' },
    { favouriteId: this.generateUuid(), createdAt: this.formattedDate, status: 'completed' },
  ]

}
