//
// TOURN ACTION CREATORS
//

//
// Mode
//

export function changeMode(mode) {
  return {
    type: 'CHANGE_MODE',
    mode,
  };
}

//
// Header
//

export function submitNewTourn(tourn) {
  return {
    type: 'SUBMIT_NEW_TOURN',
    meta: {
      event: 'new_tourn',
      to: null,
      entry: tourn,
    },
    tourn,
  };
}

export function selectTourn(tournId) {
  return {
    type: 'SELECT_TOURN',
    meta: {
      event: 'select_tourn',
      to: null,
      entry: {
        tournId,
      },
      tournId,
    },
  };
}

export function deleteAlert(alertId) {
  return {
    type: 'DELETE_ALERT',
    meta: {
      event: 'delete_alert',
      to: null,
      entry: {
        alertId,
      },
    },
    alertId,
  };
}

//
// User accepts invite to a tournament
// Provides server with the tournId,
// and the alertId to delete
//
export function acceptInvite(tournId, alertId) {
  return {
    type: 'ACCEPT_INVITE',
    meta: {
      event: 'accept_invite',
      to: tournId,
      entry: {
        tournId,
        alertId,
      },
    },
    tournId,
    alertId,
  };
}

export function toggleTournSelect() {
  return {
    type: 'TOGGLE_SELECT',
  };
}

export function toggleAlerts() {
  return {
    type: 'TOGGLE_ALERTS',
  };
}

//
// Tourn Info
//

export function updateId(tournId) {
  return {
    type: 'UPDATE_ID',
    tournId,
  };
}

export function updateType(tournType) {
  return {
    type: 'UPDATE_TYPE',
    tournType,
  };
}

export function updateName(tournName) {
  return {
    type: 'UPDATE_NAME',
    tournName,
  };
}

export function updateRules(tournRules) {
  return {
    type: 'UPDATE_RULES',
    tournRules,
  };
}

//
// Chat
//

export function updateChat(newChat) {
  return {
    type: 'UPDATE_CHAT',
    newChat,
  };
}

export function submitChat(message) {
  return {
    type: 'SUBMIT_CHAT',
    message,
  };
}

//
// Bracket
//

// export function submitAdvance(bracket) {
//   return {
//     type: 'SUBMIT_ADVANCE',
//     bracket,
//   };
// }

export function updateSize(bracketSize) {
  return {
    type: 'UPDATE_BRACKET_SIZE',
    bracketSize,
  };
}

// Tournament organizer requests to advance a player to next match
// State is updated locally and OK'ed by server
export function updateBracket(tournId, matchIndex, winner) {
  return {
    type: 'UPDATE_BRACKET',
    /*meta: {
      event: 'update_bracket',
      to: tournId,
      entry: {
        tournId,
        matchIndex,
        winner,
      },
    },*/
    tournId,
    matchIndex,
    winner,
  };
}

//
// Roster
//

export function updateRoster(newRoster) {
  return {
    type: 'UPDATE_ROSTER',
    newRoster,
  };
}

//
// Start
//

export function toggleStartBtn() {
  return {
    type: 'TOGGLE_START',
  };
}

export function startTourn(tournId) {
  return {
    type: 'START_TOURN',
    meta: {
      event: 'start_tourn',
      to: tournId,
      entry: {
        tournId,
      },
    },
  };
}

//
// Invite
//

export function toggleInviteBtn() {
  return {
    type: 'TOGGLE_INVITE',
  };
}

export function sendInvite(input, tournId) {
  return {
    type: 'SEND_INVITE',
    meta: {
      event: 'send_invite',
      to: null, // Send this to the userId
      entry: {
        input,
        tournId,
      },
    },
    input,
  };
}

//
// Network
//

// Server sends a complete state update
export function setState(state) {
  return {
    type: 'SET_STATE',
    state,
  };
}

// Server sends a user state update
export function setUserState(state) {
  return {
    type: 'SET_USER_STATE',
    state,
  };
}

// Server sends a tournament state update
export function setTournState(state) {
  return {
    type: 'SET_TOURN_STATE',
    state,
  };
}
