import { provideState } from '@ngrx/store';
import { provideEffects } from '@ngrx/effects';
import { messageReducer } from './store/message-transfer.reducers';
import { MessageEffects } from './store/message-transfer.effects';

export const provideMessageStore = [
  provideState({ name: 'messages', reducer: messageReducer }),
  provideEffects(MessageEffects)
];
