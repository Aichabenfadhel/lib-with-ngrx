import { Action,createAction, props } from '@ngrx/store';
import { Message } from './message-transfer.model';

export enum MessageActionTypes{
    GET_ALL_MESSAGES ='[Message] Load Messages'
}

export const addMessage = createAction(
  '[Message] Add Message',
  props<{ text: string; sender: string }>()
);
export const addMessageSuccess = createAction(
  '[Message] Add Message Success',
  props<{ message: Message }>()
);
export const addMessageFailure = createAction(
  '[Message] Add Message failure',
  props<{ error: string }>()
);

export const removeMessage = createAction(
  '[Message] Remove Message',
  props<{ id: number }>()
);

export const loadMessages = createAction('[Message] Load Messages');

// export class GetAllMessagesAction implements Action{
//     type: MessageActionTypes=MessageActionTypes.GET_ALL_MESSAGES;

//     constructor(public payload:any){
//         console.log("saleeem ! ",payload);
        
//     }

// }

export const loadMessagesSuccess = createAction(
  '[Message] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Message] Load Messages Failure',
  props<{ error: string }>()
);
