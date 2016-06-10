function postMessages(state = {}, action){
  switch(action.type){
    case 'ADD_MESSAGE':
      // return the new state with the new comment
      return {
        author: action.author,
        comment: action.comment,
      };
    case 'REMOVE_MESSAGE':
      // return the new state without the deleted comment
      return {
        // ...state.splice(action.i, 1),
      }
    default:
      return state;
  }
  return state;
}

function messages(state = {}, action){
  if(typeof action.postId !== 'undefined') {
    let _id = action.postId;
    state.tournament.messages[action.postId] = postMessages(state.tournament.messages[action.postId], action)
  }
  return state;
}

export default messages;
