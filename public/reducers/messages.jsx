const messages(state = [], action) {
  switch(action.type){
    case 'ADD_MESSAGE':
      // return the new state with the new comment
      return [...state,{
        user: action.author,
        text: action.comment,
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

function comments(state = [], action) {
  if(typeof action.postId !== 'undefined') {
    return {
      ...state,
      [action.postId]: messages(state[action.postId], action),
    }
  }
  return state;
}
