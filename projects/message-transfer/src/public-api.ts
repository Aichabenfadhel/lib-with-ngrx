/*
 * Public API Surface of message-transfer
 */

import { provideEffects } from '@ngrx/effects';
import { provideStore } from '@ngrx/store';
import { messageReducer } from './lib/store/message-transfer.reducers';
import { MessageEffects } from './lib/store/message-transfer.effects';


export function provideMessageStore() {
    return [
      provideStore({ messages: messageReducer }),
      provideEffects(MessageEffects),
    ];
  }
export * from './lib/message-transfer.service';
export * from './lib/message-transfer.component';
export * from './lib/store/message-transfer.actions'
export * from './lib/store/message-transfer.effects'
export * from './lib/store/message-transfer.model'
export * from './lib/store/message-transfer.selector'
export * from './lib/store/message-transfer.store'
export * from './lib/store/message-transfer.reducers'
export * from './lib/store/message.service'

