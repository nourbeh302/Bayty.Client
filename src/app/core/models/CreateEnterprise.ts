import { AccountType } from "../enums/AccountType";
import { Account } from "./Account";

export class CreateEnterprise {
  constructor(
    public name: string = "",
    public taxRecordNumber: string = "",
    public phoneNumber: string = "",
    public location: string = "",
    public accountType: AccountType = AccountType.Enterprise
  ) { }
}
