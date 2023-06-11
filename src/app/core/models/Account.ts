import { AccountType } from "../enums/AccountType";

export class Account {
  constructor(
    public email: string = "",
    public password: string = "",
    public firstName: string = "",
    public lastName: string = "",
    public profileImage: string = "",
    public imagePath: string = "",
    public personalImage: Blob | null = null,
    public accountType: AccountType,
    public address: string = "",
    public phoneNumber: string = "",
    public age: number,
  ) { }
}
