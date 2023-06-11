import { OrderDirectionPrice } from "../enums/OrderDirectionPrice";
import { PropertyType } from "../enums/PropertyType";

export class SearchAdvertisement {
    constructor(
        public city: string,
        public minPrice: number,
        public maxPrice: number,
        public propertyType: PropertyType,
        public isRent: boolean,
        public maxArea: number,
        public minArea: number,
        public order: OrderDirectionPrice,
    ) { }
}