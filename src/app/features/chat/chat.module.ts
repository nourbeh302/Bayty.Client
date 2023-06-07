import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatroomComponent } from './chatroom/chatroom.component';
import { ChatRoutingModule } from './chat-routing.module';

@NgModule({
  declarations: [
    ChatroomComponent
  ],
  imports: [
    CommonModule,
    ChatRoutingModule
  ]
})
export class ChatModule { }
