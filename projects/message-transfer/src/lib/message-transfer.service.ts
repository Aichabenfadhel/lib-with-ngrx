import { Injectable } from '@angular/core';
import { Message } from './store/message-transfer.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessageTransferService {

  constructor() { }

  private messages: Message[] = [
    { id: 1, text: 'Hello!', sender: 'Aicha'},
    { id: 2, text: 'How are you?', sender: 'Issra' },
  ];

  getMessages(): Observable<Message[]> {
    
     return of(this.messages)

    
  }

  sendMessage(textMsg:string,senderMsg:string): Observable<Message> {
    const newMessage: Message = {
      id: this.messages.length + 1, 
      text:textMsg,
      sender:senderMsg
    };

    this.messages = [...this.messages, newMessage];
    console.log('Updated messages:', this.messages);
    return of(newMessage); 
  }

  removeMessage(id: number): Observable<Message[]> {
    
    this.messages = this.messages.filter(message => message.id !== id);
    return of(this.messages);  
  }
}
