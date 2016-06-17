import { fromJS } from 'immutable';
import { defaultTourn } from '../../../data/defaultTourn';

function handleCreate(state, newMode) {
  return state.set('mode', newMode).set('tournament', fromJS(defaultTourn));
}

function handleSubmit(state, data) {
  // TODO: submit new tourn data to server
}

function handleToggleSelect(state, data) {
  // body...
}

function handleToggleAlerts(state, data) {
  // body...
}

function handleDeleteAlert(state, data) {
  // body...
}

function handleSelectTourn(state, data) {
  // body...
}

function handleAcceptInvite(state, data) {
  // body...
}

export default function header(state, action) {
  switch (action.type) {
    case 'CREATE_NEW_TOURN':
      return handleCreate(state, action.mode);
    case 'SUBMIT_NEW_TOURN':
      return handleSubmit(state, action.data); // TODO: specify action data
    case 'TOGGLE_SELECT':
      return handleToggleSelect(state, action.data);
    case 'TOGGLE_ALERTS':
      return handleToggleAlerts(state, action.data);
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
