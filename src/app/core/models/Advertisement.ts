import { User } from "./User";

export class Advertisment {
    constructor(
        public advertisementId: number,
        public title: string,
        public description: string,
        public createdAt: Date,
        public user: User,
        public propertyType: string
    ) { }
}