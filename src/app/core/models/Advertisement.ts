import { PaymentType } from "../enums/PaymentType";
import { User } from "./User";

export class Advertisement {
    constructor(
        public advertisementId: number,
        public title: string,
        public description: string,
        public address: string,
        public city: string,
        public price: number,
        public roomsCount: number,
        public bathsCount : string,
        public creationDate: string,
        public hasElevator: boolean,
        public numOfFlats: number,
        public numOfFloors: number,
        public floorNumber: number,
        public isFurnished: boolean,
        public isVitalSight: boolean,
        public hasSwimming: boolean,
        public userId: string,
        public propertyType: string,
        public paymentType: PaymentType
    ) { }
}