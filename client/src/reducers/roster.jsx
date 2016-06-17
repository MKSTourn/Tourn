export default rules;

import { fromJS } from 'immutable';
import { defaultTourn } from '../../../data/defaultTourn';

function handlTemplate(state, newMode) {
  return state.set('mode', newMode).set('tournament', fromJS(defaultTourn));
}


export default function tournInfo(state, action) {
  switch (action.type) {
    case 'TEMPLATE':
      return handleCreate(state, action.mode);
    default:
      return state;
  }
}
