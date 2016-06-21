//
// Header reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';
import { socket } from '../utilities/socketContainer.jsx';

function handleSubmit(state, tourn) {
  console.log('Header reducer: handleSubmit');
  // TODO: submit new tourn data to server
  // provide tournament object
  return state;
}

function handleSelectTourn(state, tournId) {
  console.log('Header reducer: handleSelectTourn');
  // TODO: submit selected tourn to server
  // provide tournId
  return state;
}

function handleDeleteAlert(state, alertId) {
  console.log('Header reducer: handleDeleteAlert');
  // Optimistic next state:
  // Delete alertId obj from userData.alerts
  return state;
}

function handleAcceptInvite(state, tournId, alertId) {
  console.log('Header reducer: handleAcceptInvite');
  // Optimistic next state:
  // Add tournId to userData.userTourns
  return state;
}

function handleToggleSelect(state, showTournList) {
  console.log('Header reducer: handleToggleSelect');
  return state.set('showTournList', !showTournList);
}

function handleToggleAlerts(state, showAlertList) {
  console.log('Header reducer: handleToggleAlerts');
  return state.set('showAlertList', !showAlertList);
}

export default function header(state = fromJS(INITIAL_STATE).get('header'), action) {
  switch (action.type) {
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state, action.tourn);
    case 'SELECT_TOURN':
      return handleSelectTourn(state, action.tournId);
    case 'DELETE_ALERT':
      return handleDeleteAlert(state, action.userId, action.alert);
    case 'ACCEPT_INVITE':
      return handleAcceptInvite(state, action.userId, action.tournId, alert);
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state, action.showTournList);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state, action.data);
    default:
      return state;
  }
}
