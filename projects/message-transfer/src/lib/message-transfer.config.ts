import { provideState, provideStore } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { messageReducer } from './store/message-transfer.reducers';
import { MessageEffects } from './store/message-transfer.effects';

export const provideMessageStore = [
  provideStore({ 'messages': messageReducer }),
  provideEffects(MessageEffects)
];
