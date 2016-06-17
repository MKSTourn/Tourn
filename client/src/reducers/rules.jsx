const rules = (state = [], action) => {
  let resultState = null;
  let tournamentMorph = null;

 if (action.type === 'CHANGE_RULE') {
   resultState = Object.assign({}, state);
   tournamentMorph = Object.assign({}, state.tournament);
   resultState.tournament = Object.assign(tournamentMorph, {
     rules: {
       rule: action.rule,
       value: action.value,
     },
   });
   return resultState;
 }
return state;
};


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
