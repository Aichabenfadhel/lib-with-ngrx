import { createReducer, on } from '@ngrx/store';
import { addMessage, removeMessage, loadMessagesSuccess, loadMessagesFailure } from './message-transfer.actions';
import { Message } from './message-transfer.model';

export interface MessageState {
  messages: Message[];
}

const initialState: MessageState = {
  messages: [],
};

export const messageReducer = createReducer(
  initialState,
  on(addMessage, (state, { message }) => ({
    ...state,
    messages: [...state.messages, message],
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
