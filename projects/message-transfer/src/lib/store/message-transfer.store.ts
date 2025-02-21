import { Injectable, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectAllMessages } from './message-transfer.selector';
import { addMessage, loadMessages, removeMessage } from './message-transfer.actions';
import { Message } from './message-transfer.model';

@Injectable({
  providedIn: 'root',
})
export class MessageStore {
    
  private store = inject(Store);

  selectFromStore(): Observable<Message[]> {
    return this.store.select(selectAllMessages);
  }

  loadMessagesfromStore() {
      console.log("salem from store");
    this.store.dispatch(loadMessages());
    
    //  this.store.dispatch(new GetAllMessagesAction({}))
  }

  addMessages(text: string, sender: string ) {
    this.store.dispatch(addMessage({text,sender} ));
  }
  removeMessages(id: number) {
    this.store.dispatch(removeMessage({ id }));
  }
}
