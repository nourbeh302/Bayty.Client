import { Role } from "../enums/Role";

export class Account {
  constructor(
    public email: string = "",
    public password: string = "",
    public firstName: string = "",
    public lastName: string = "",
    public profileImage: string = "",
    public imagePath: string = "",
    public accountType: number,
    public address: string = "",
    public phoneNumber: string = "",
    public age: number,
  ) {}
}
