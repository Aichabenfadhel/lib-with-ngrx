import { createReducer, on } from '@ngrx/store';
import { addMessage, removeMessage, loadMessagesSuccess, loadMessagesFailure, loadMessages, addMessageSuccess, addMessageFailure } from './message-transfer.actions';
import { Message } from './message-transfer.model';

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

 const _messageReducer = createReducer(
  initialState,
 
  on(addMessageSuccess, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message]
  })),
  on(addMessageFailure, (state, { error }) => ({
    ...state,
    error
  })),
  on(removeMessage, (state, { id }) => ({
    ...state,
    messages: state.messages.filter(msg => msg.id !== id),
  })),
 
  on(loadMessagesSuccess, (state, { messages }) => ({
    ...state,
    messages,
  })),
    on(loadMessagesFailure,(state,{error})=>({
    ...state,
    messages:[],
    error
  }))
);
export function messageReducer(state: any, action: any) {
  return _messageReducer(state, action);
}