import { Injectable } from '@angular/core';

@Injectable()
export class MessageService {
  messages: String[] = [];



  constructor() { }

  add(messages: String) {
    this.messages.push(messages);
  }

  clear() {
    console.log('cleared ');
    this.messages = [];
  }
}
