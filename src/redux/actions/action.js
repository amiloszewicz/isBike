import { INCREASE_NUMBER } from '../constants/action-types';
import { DECREASE_NUMBER } from '../constants/action-types';

export const increment = (payload) => ({
  type: { type: 'INCREASE_NUMBER', payload }
})

export const decrement = (payload) => ({
  type:  { type: 'DECREASE_NUMBER', payload }
})
