import { Component } from "@angular/core";
import { Transaction } from "src/app/core/models/Transaction";

@Component({
  selector: "app-my-transactions",
  templateUrl: "./my-transactions.component.html",
  styleUrls: ["./my-transactions.component.css"],
})
export class MyTransactionsComponent {
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

  transactions: Transaction[] = [
    { transactionId: this.generateUuid(), createdAt: this.formattedDate, status: 'cancelled' },
    { transactionId: this.generateUuid(), createdAt: this.formattedDate, status: 'completed' },
    { transactionId: this.generateUuid(), createdAt: this.formattedDate, status: 'cancelled' },
  ]

}
