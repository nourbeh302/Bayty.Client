import { PaymentType } from "../enums/PaymentType";
import { PropertyType } from "../enums/PropertyType";

export class PostAdvertisement {
    constructor(
        public title: string,
        public description: string,
        public address: string,
        public city: string,
        public price: number,
        public roomsCount: number,
        public bathsCount: number,
        public kitchensCount: number,
        public hasElevator: boolean,
        public numOfFlats: number,
        public numOfFloors: number,
        public floorNumber: number,
        public isFurnished: boolean,
        public isVitalSight: boolean,
        public hasSwimming: boolean,
        public userId: string,
        public propertyType: PropertyType,
        public paymentType: PaymentType
    ) { }
}