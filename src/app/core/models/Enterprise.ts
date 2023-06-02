import { Role } from "../enums/Role";
import { Account } from "./Account";

export class Enterprise extends Account {
  constructor(
    public enterpriseId: string = "",
    public enterpriseName: string = "",
    public taxpayerIdentificationNumber: string = ""
  ) {
    super();
    this.role = Role.Enterprise;
  }
}
