import { Timestamp } from "rxjs";
import { User } from "./User";

export class Message {
    constructor(
        public sender: User | null = null,
        public receiver: User | null = null,
        public createdAt: Date = new Date(),
        public messageContent: string = "",
    ) {
        
    }
}