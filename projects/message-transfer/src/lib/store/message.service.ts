import { Injectable } from '@angular/core';
import { Message } from './message-transfer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }
  private messages: Message[] = [
    { id: 1, text: 'Hello!', sender: 'Aicha'},
    { id: 2, text: 'How are you?', sender: 'Issra' },
  ];

  getMessages(): Observable<Message[]> {
    console.log("this is from get message function",this.messages);
    
    // return of(this.messages)

    return of([
      { id: 1, text: 'Hello!', sender: 'Aicha'},
      { id: 2, text: 'How are you?', sender: 'Issra' },
    ]);
  }

  sendMessage(message: Message): Observable<Message> {
   
    return of(message);
  }

  removeMessage(id: number): void {
    
    this.messages = this.messages.filter(message => message.id !== id);
    
  }
}
