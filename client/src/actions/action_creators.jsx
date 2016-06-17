//
//*********** Server actions: ************//
//

//**Roster**//

//In roster, user clicks invite new player button
export function inviteNewPlayer(){}

//**Chatbox**//

//In chatbox, user adds message
export function addMessage(postId, author, message) {
  return {
    type: 'ADD_MESSAGE',
    postId,
    author,
    comment,
  }
}

//In chatbox, user removes message
export function removeMessage(postId, i){
  return {
    type: 'REMOVE_MESSAGE',
    i,
    postId,
  }
}

//**Bracket**//

//In bracket, organizer clicks on winner
export function advanceWinner(){}

//**Rules**//

//In rules, organizer clicks to start the tournament
export function startTourn(){}

//In rules, organizer clicks to end the tournament
export function endTourn(){}

//**Header**//

//In header on flipped create new tournament button, user clicks when finished designing tournament
export function submitTournCreated(){}

//In header alerts, user clicks accept
export function acceptTournInvite(){}

//In header alerts, user clicks decline
export function declineTournInvite(){}

//
//*********** Client actions: ************//
//

//**Bracket**//

//In bracket, organizer types in the tournament
export function editTournName(){}

//**Rules**//

//In rules (after new tournament creation button clicked, but before new tournament submission),
  // organizer clicks button
export function cancelNewTourn(){}

// In rules, user edits a rule by clicking on it
export function changeRule(type, rule, value) {
  return {
    type: 'CHANGE_RULE',
    rule,
    value,
  };
}

// **Header** //

// In header, organizer clicks on the create new tournament button
export function createNewTourn(mode) {
  return {
    type: 'CREATE_NEW_TOURN',
    mode,
  };
}

// In header, organizer clicks on the view tournaments button
export function toggleTournSelect() {
  return {
    type: 'TOGGLE_SELECT',
  };
}

// In header, user clicks on the alert bell icon
export function toggleAlertView() {
  return {
    type: 'TOGGLE_ALERTS',
  };
}

export function selectTourn(tournId) {
  return {
    type: 'SELECT_TOURN',
    tournId,
  };
}

export function deleteAlert(userId, alertId) {
  return {
    type: 'DELETE_ALERT',
    userId,
    alertId,
  };
}

export function acceptInvite(userId, tournId) {
  return {
    type: 'ACCEPT_INVITE',
    userId,
    tournId,
  };
}
