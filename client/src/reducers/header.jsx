//
// Header reducer
//

// import INITIAL_STATE from '../../../data/state.jsx';
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
  return state;
}

function handleDeleteAlert(state, alertId) {
  console.log('Header reducer: handleDeleteAlert');
  // Optimistic next state:
  // Delete alertId obj from userData.alerts
  let alerts = state.get('alerts').toJS();
  const delIndex = alerts.findIndex(alert => alert.alertId === alertId);
  alerts = alerts.splice(delIndex, 1);
  return ~delIndex ?
             state : state.set('alerts', fromJS(alerts));
}

function handleAcceptInvite(state, tournId, alertId) {
  console.log('Header reducer: handleAcceptInvite');
  // Optimistic next state:
  // Add tournId to userData.userTourns
  let alerts = state.get('alerts').toJS();
  let tourns = state.get('userTourns').toJS();
  const delIndex = alerts.findIndex(alert => alert.alertId === alertId);
  const newTourn = {
    tournName: alerts[delIndex].tournName,
    tournId,
  };

  tourns = tourns.splice(0, 0, newTourn);
  alerts = alerts.splice(delIndex, 1);

  return state.set('alerts', fromJS(alerts))
              .set('userTourns', fromJS(tourns));
}

function handleToggleSelect(state) {
  const toggledTournList = !state.get('showTournList');
  console.log('Header reducer: handleToggleSelect');
  console.log('state before update', state);
  return state.set('showTournList', toggledTournList);
}

function handleToggleAlerts(state) {
  const toggledAlertList = !state.get('showAlertList');

  console.log('Header reducer: handleToggleAlerts');
  return state.set('showAlertList', toggledAlertList);
}

export default function header(state, action) {
  switch (action.type) {
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state);
    case 'SELECT_TOURN':
      return handleSelectTourn(state);
    case 'DELETE_ALERT':
      return handleDeleteAlert(state, action.userId, action.alert);
    case 'ACCEPT_INVITE':
      return handleAcceptInvite(state, action.userId, action.tournId, alert);
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state);
    default:
      return state;
  }
}
