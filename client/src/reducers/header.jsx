//
// Header reducer
//

import { fromJS } from 'immutable';

function handleSubmit(state) {
  console.log('Header reducer: handleSubmit');
  // User's new tourn info has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  return state;
}

function handleSelectTourn(state) {
  console.log('Header reducer: handleSelectTourn');
  // User's new tourn info has been submitted to server.
  // Nothing to render in the meantime, so don't change state.
  // TODO: Change the currently selected tourn name to the name
  // of the newly selected one (even though the server hasn't
  // given us the tournament state yet)
  return state;
}

function handleDeleteAlert(state, alertId) {
  console.log('Header reducer: handleDeleteAlert');
  console.log('Header reducer: alertId =', alertId);
  // Optimistic next state:
  // Delete alertId obj from userData.alerts
  const alerts = state.getIn(['userData', 'alerts']).toJS();
  const delIndex = alerts.findIndex(alert => alert.alertId === alertId);
  alerts.splice(delIndex, 1);
  return ~delIndex ? state.setIn(['userData', 'alerts'], fromJS(alerts)) :
                     state;
}

function handleAcceptInvite(state, tournId, alertId) {
  console.log('Header reducer: handleAcceptInvite');
  console.log('Header reducer: tournId, alertId =', tournId, alertId);
  // Optimistic next state:
  // Add new tourn to userData.userTourns
  const alerts = state.getIn(['userData', 'alerts']).toJS();
  const tourns = state.getIn(['userData', 'userTourns']).toJS();
  const delIndex = alerts.findIndex(alert => alert.alertId === alertId);
  const newTourn = {
    tournName: alerts[delIndex].tournName,
    tournId,
  };

  tourns.splice(0, 0, newTourn);
  alerts.splice(delIndex, 1);

  return ~delIndex ? state.setIn(['userData', 'alerts'], fromJS(alerts))
                          .setIn(['userData', 'userTourns'], fromJS(tourns)) :
                     state.setIn(['userData', 'userTourns'], fromJS(tourns));
}

function handleToggleSelect(state) {
  console.log('Header reducer: handleToggleSelect');
  const toggledTournList = !state.get('showTournList');
  return state.set('showTournList', toggledTournList);
}

function handleToggleAlerts(state) {
  console.log('Header reducer: handleToggleAlerts');
  const toggledAlertList = !state.get('showAlertList');
  return state.set('showAlertList', toggledAlertList);
}

export default function header(state, action) {
  switch (action.type) {
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state);
    case 'SELECT_TOURN':
      return handleSelectTourn(state);
    case 'DELETE_ALERT':
      return handleDeleteAlert(state, action.alertId);
    case 'ACCEPT_INVITE':
      return handleAcceptInvite(state, action.tournId, action.alertId);
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state);
    default:
      return state;
  }
}
