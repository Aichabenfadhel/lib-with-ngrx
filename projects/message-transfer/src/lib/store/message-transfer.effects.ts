import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, addMessage, removeMessage } from './message-transfer.actions';
import { catchError, map, mergeMap, of, tap } from 'rxjs';
import { MessageService } from './message.service';

@Injectable()
export class MessageEffects {

    constructor(private actions$: Actions, private messageService: MessageService) {}

    loadMessages$ = createEffect(() =>
        this.actions$.pipe(
          tap(action => console.log('Effect Triggered:', action)), 
          ofType(loadMessages),
          mergeMap(() =>
            this.messageService.getMessages().pipe(
              tap(messages => console.log('Messages Fetched:', messages)),  
              map(messages => loadMessagesSuccess({ messages })),
              catchError(error => {
                console.error('Error in Effect:', error);
                return of(loadMessagesFailure({ error: error.message }));
              })
            )
          )
        )
      );

  addMessage$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addMessage),
      mergeMap((action) =>
        this.messageService.sendMessage(action.message).pipe(
          map((message) => addMessage({ message })),
          catchError((error) => of(loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

  
//   removeMessage$ = createEffect(() =>
//     this.actions$.pipe(
//       ofType(removeMessage),
//       mergeMap((action) =>
//         this.messageService.removeMessage(action.id).pipe(
//           map((updatedMessages) => loadMessagesSuccess({ messages: updatedMessages })),
//           catchError((error) => of(loadMessagesFailure({ error: error.message })))
//         )
//       )
//     )
//   );

}
