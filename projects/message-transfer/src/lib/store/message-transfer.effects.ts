import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { loadMessages, loadMessagesSuccess, loadMessagesFailure, addMessage, removeMessage, MessageActionTypes, addMessageSuccess, addMessageFailure } from './message-transfer.actions';
import { catchError, map, mergeMap, of, switchMap, tap } from 'rxjs';
import { MessageTransferService } from '../message-transfer.service';

@Injectable()
export class MessageEffects {
  actions$ = inject(Actions);
  messageService = inject(MessageTransferService)

    // constructor(private actions$: Actions, private messageService: MessageTransferService) { console.log("actions from effects",this.actions$)}

    // loadMessages$ = createEffect(() =>
    //     this.actions$.pipe(
    //       tap(action => console.log('Effect Triggered:', action)), 
    //       ofType(loadMessages),
    //       mergeMap((messages) => {
    //         if (!messages) {
    //                       console.error('Received undefined or null messages');
    //         return of(loadMessagesFailure({ error: 'No messages found' }));
    //                     }
    //                     console.log('Messages Fetched:', messages);
    //         return of(loadMessagesSuccess({ messages }));
    //                   }),
    //       mergeMap(() =>
    //         this.messageService.getMessages().pipe(
    //           tap(messages => console.log('Messages Fetched:', messages)),  
    //           map(messages => loadMessagesSuccess({ messages })),
    //           catchError(error => {
    //             console.error('Error in Effect:', error);
    //             return of(loadMessagesFailure({ error: error.message }));
    //           })
    //         )
    //       )
    //     )
    //   );

    loadAllMessagesEffect$ = createEffect(() =>
       
        
        this.actions$.pipe(
          tap(action => console.log('Effect Triggered:', action)), 
          ofType(loadMessages),
          mergeMap(() =>
            this.messageService.getMessages().pipe(
              map(messages => loadMessagesSuccess({ messages })),
              catchError(error => {
                console.error('Effect Error:', error); 
                return of(loadMessagesFailure({ error: error.message }));
              })
            )
          )
        )
      );
  addMessageEffect$ = createEffect(() =>
    this.actions$.pipe(
      tap(action => console.log('Add Effect Triggered:', action)), 
      ofType(addMessage),
      switchMap(({ text, sender }) =>
        this.messageService.sendMessage(text, sender).pipe(
          map((message) => addMessageSuccess({ message })),
          catchError((error) => of(addMessageFailure({ error: error.message })))
        )
      )
    )
  );

  
  removeMessageEffect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(removeMessage),
      switchMap((action) =>
        this.messageService.removeMessage(action.id).pipe(
          map((updatedMessages) => loadMessagesSuccess({ messages: updatedMessages })),
          catchError((error) => of(loadMessagesFailure({ error: error.message })))
        )
      )
    )
  );

}
