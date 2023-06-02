import { User } from "./User";

export class Report {
    constructor(
        public reportId: string = "",
        public complainer: User | null = null,
        public complaineeId: string = ""
    ) { }
}