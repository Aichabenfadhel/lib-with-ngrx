import { createAction, props } from '@ngrx/store';
import { Message } from './message-transfer.model';

export const addMessage = createAction(
  '[Message] Add Message',
  props<{ message: Message }>()
);

export const removeMessage = createAction(
  '[Message] Remove Message',
  props<{ id: number }>()
);

export const loadMessages = createAction('[Message] Load Messages');

export const loadMessagesSuccess = createAction(
  '[Message] Load Messages Success',
  props<{ messages: Message[] }>()
);

export const loadMessagesFailure = createAction(
  '[Message] Load Messages Failure',
  props<{ error: string }>()
);
