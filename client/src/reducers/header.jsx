//
// Header reducer
//

import INITIAL_STATE from '../../../data/state.jsx';
import { fromJS } from 'immutable';

function handleSubmit(state, tourn) {
  console.log('Header reducer: handleSubmit');
  // User's new tourn info has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

function handleSelectTourn(state, tournId) {
  console.log('Header reducer: handleSelectTourn');
  // User's new tourn info has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

function handleDeleteAlert(state, alertId) {
  console.log('Header reducer: handleDeleteAlert');
  // Optimistic next state:
  // Delete alertId obj from userData.alerts
  const alerts = state.get('alerts').toJS();
  const delIndex = alerts.findIndex(alert => alert.alertId === alertId);
  return ~delIndex ?
             state : state.set('alerts', fromJS(alerts.splice(delIndex, 1)));
}

function handleAcceptInvite(state, tournId, alertId) {
  console.log('Header reducer: handleAcceptInvite');
  // Optimistic next state:
  // Add tournId to userData.userTourns
  return state;
}

function handleToggleSelect(state, showTournList) {
  let toggledTournList = !state.get('showTournList');
  console.log('handleToggleSelect reducer function ran');
  console.log('state before update', state);
  return state.set('showTournList', toggledTournList );
}

function handleToggleAlerts(state, showAlertList) {
  let toggleAlertList = !state.get('showAlertList');
  console.log('handleToggleAlerts reducer function ran');
  console.log('state before update', state);
  return state.set('showAlertList', toggleAlertList);
}

export default function header(state, action) {
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
      return handleToggleSelect(state, action.showTournList); //CHANGED!!!
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state, action.showAlertList);
    default:
      return state;
  }
}
