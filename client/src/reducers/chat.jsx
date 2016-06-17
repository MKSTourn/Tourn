function messages(state, action){
  let newState = Object.assign(state, {});
  let newTournamentState = Object.assign(state.tournament, {});
  let newMessageArray = Object.assign(state.tournament.messages, []);
  newState.tournament = newTournamentState;
  newState.tournament.messages = newMessageArray;
  switch(action.type){
    case 'ADD_MESSAGE':
      // return the new state with the new comment
      newState.tournament.messages.push({
        author: action.author,
        comment: action.comment,
      });
    return newState;

    case 'REMOVE_MESSAGE':
      // return the new state without the deleted comment
      let _id = action.index;
      console.log('id', _id);
      console.log('pre messages', newState.tournament.messages);
      newState.tournament.messages.splice(_id, 1);
      console.log('pre messages', newState.tournament.messages);
      console.log('final newState', newState);
    return newState;

    default:
    return state;
  }
  return state;
}

export default messages;


export default rules;

import { fromJS } from 'immutable';
import { defaultTourn } from '../../../data/defaultTourn';

function handleMessageSubmit(state, newMode) {
  return state.set('mode', newMode).set('tournament', fromJS(defaultTourn));
}


export default function tournInfo(state, action) {
  switch (action.type) {
    case 'SUBMIT_MESSAGE':
      return handleMessageSubmit(action.data);
    default:
      return state;
  }
}
