// user adds message
export function addMessage(postId, author, message){
  return {
    type: 'ADD_MESSAGE',
    postId,
    author,
    comment,
  }
}

//user removes message
export function removeMessage(postId, i){
  return {
    type: 'REMOVE_MESSAGE',
    i,
    postId,
  }
}

//user edits a rule
export function changeRule(type, rule, value){
  return {
    type: 'CHANGE_RULE',
    rule,
    value,
  }
}

