import { createFeatureSelector, createSelector } from '@ngrx/store';
import { MessageState } from './message-transfer.reducers';

export const selectMessageState = createFeatureSelector<MessageState>('messages');

export const selectAllMessages = createSelector(
  selectMessageState,
  (state) => state.messages
);
