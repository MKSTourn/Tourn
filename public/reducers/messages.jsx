function postMessages(state = [], action){
  switch(action.type){
    case 'ADD_MESSAGE':
      // return the new state with the new comment
      return [...state, {
        author: action.author,
        comment: action.comment,
      }];
    case 'REMOVE_MESSAGE':
      // return the new state without the deleted comment
      return [
        ...state.slice(0,action.i),
        ...state.slice(action.i + 1),
      ]
    default:
      return state;
  }
  return state;
}

function messages(state = {}, action){
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: postMessages(state[action.postId], action),
    }
  }
  return state;
}

export default messages;
