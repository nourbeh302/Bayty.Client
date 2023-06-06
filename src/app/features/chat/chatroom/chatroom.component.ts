import { Component } from '@angular/core';
import { Message } from 'src/app/core/models/Message';
import { User } from 'src/app/core/models/User';

@Component({
  selector: 'app-chatroom',
  templateUrl: './chatroom.component.html',
  styleUrls: ['./chatroom.component.css']
})
export class ChatroomComponent {
  // users: User[] = [
  //   new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //   new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //   new User("bdcihdwic", "Iker", "Rosales", 23, null),
  //   new User("bdcihdwic", "Iker", "Rosales", 23, null),
  //   new User("bdcihdwic", "Iker", "Rosales", 23, null),
  //   new User("bdcihdwic", "Iker", "Rosales", 23, null),
  //   new User("bdcihdwic", "Iker", "Rosales", 23, null),
  // ]
  
  // messages: Message[] = [
  //   new Message(
  //     new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //     new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //     new Date(),
  //     "Hello"
  //   ),
  //   new Message(
  //     new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //     new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //     new Date(),
  //     "World"
  //   ),
  //   new Message(
  //     new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //     new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //     new Date(),
  //     "World"
  //   ),
  //   new Message(
  //     new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //     new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //     new Date(),
  //     "World"
  //   ),
  //   new Message(
  //     new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //     new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //     new Date(),
  //     "World"
  //   ),
  // ]

  // sendMessage() {
  //   this.messages.push(
  //     new Message(
  //       new User("bdcihdwic", "Hugo", "Sanchez", 23, null),
  //       new User("bdcihdwic", "Sandra", "Rodriguez", 23, null),
  //       new Date(),
  //       document.querySelector("input")?.value
  //     ),
  //   )
  // }
}
