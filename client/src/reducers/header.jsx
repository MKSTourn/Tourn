//
// Header reducer
//

function handleSubmit(state, data) {
  // TODO: submit new tourn data to server
  // provide tournament object
}

function handleToggleSelect(state, showTournList) {
  return state.set('showTournList', !showTournList);
}

function handleToggleAlerts(state, showAlertList) {
  return state.set('showAlertList', !showAlertList);
}

function handleDeleteAlert(state, data) {
  // TODO: submit delete request to server
  // provide userId, alert array index to delete
}

function handleSelectTourn(state, data) {
  // TODO: submit selected tourn to server
  // provide tournId
}

function handleAcceptInvite(state, data) {
  // TODO: submit accepted tourn to server
  // provide userId, tournId, and alert array index to delete
}

export default function header(state, action) {
  switch (action.type) {
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state, action.data); // TODO: specify action data
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state.header, action.data);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state.header, action.data);
    case 'SELECT_TOURN':
      return handleSelectTourn(state, action.data);
    case 'DELETE_ALERT':
      return handleDeleteAlert(state, action.data);
    case 'ACCEPT_INVITE':
      return handleAcceptInvite(state, action.data);
    default:
      return state;
  }
}
