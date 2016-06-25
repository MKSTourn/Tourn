import store from '../store.jsx';
import * as actions from '../actions/action_creators.jsx';
const dispatch = store.dispatch;

// Configure client socket listeners to dispatch appropriate actions on socket events
export default function startListeners(socket) {
  //
  // Header
  //

  // Update tourn ID after submitting new tourn info
  socket.on('new_tourn_success', (data) => {
    console.log('Socket event: new_tourn_success:', data);
    dispatch(actions.updateId(data));
  });

  // TODO: Revert state and display error
  socket.on('new_tourn_fail', (data) => {
    console.log('Socket event: new_tourn_fail:', data);
  });

  // Update tournament object after submitting tournId
  socket.on('select_tourn_success', (data) => {
    console.log('Socket event: select_tourn_success:', data);
    dispatch(actions.setTournState(data));
  });

  // TODO: Revert state and display error
  socket.on('select_tourn_fail', (data) => {
    console.log('Socket event: select_tourn_fail:', data);
  });

  // Update alerts after submitting alert to delete
  socket.on('delete_alert_success', (data) => {
    // TODO: decide whether client optimistically deletes alert
    //       or update alerts list on this event
    // Do nothing for now
    console.log('Socket event: delete_alert_success:', data);
  });

  // TODO: Revert state and display error
  socket.on('delete_alert_fail', (data) => {
    console.log('Socket event: delete_alert_fail:', data);
  });

  // Update user's tourn list
  socket.on('accept_invite_success', (data) => {
    console.log('Socket event: accept_invite_success:', data);
    dispatch(actions.setTournState(data));
  });

  // TODO: Revert state and display error
  socket.on('accept_invite_fail', (data) => {
    console.log('Socket event: accept_invite_fail:', data);
  });

  //
  // Chat
  //

  // Update user's tourn list
  socket.on('submit_chat_success', (data) => {
    console.log('Socket event: submit_chat_success:', data);
    dispatch(actions.setTournState(data));
  });

  // TODO: Revert state and display error
  socket.on('submit_chat_fail', (data) => {
    console.log('Socket event: submit_chat_fail:', data);
  });

  //
  // Bracket
  //

  // Update user's tourn list
  socket.on('update_bracket_success', (data) => {
    console.log('Socket event: update_bracket_success:', data);
    // TODO: decide whether client optimistically deletes alert
    //       or update alerts list on this event
    // Do nothing for now
  });

  // TODO: Revert state and display error
  socket.on('update_bracket_fail', (data) => {
    console.log('Socket event: update_bracket_fail:', data);
  });

  //
  // Start
  //

  // Toggle show start and invite button
  // and set mode to 'View'
  socket.on('start_tourn_success', (data) => {
    console.log('Socket event: start_tourn_success:', data);
    dispatch(actions.changeMode('View'));
    dispatch(actions.toggleTournStart());
    dispatch(actions.toggleStartBtn());
  });

  // TODO: Revert state and display error
  socket.on('start_tourn_fail', (data) => {
    console.log('Socket event: start_tourn_fail:', data);
    dispatch(actions.setTournState(data));
  });

  //
  // Roster
  //

  // Update user's roster
  socket.on('send_invite_success', (data) => {
    console.log('Socket event: send_invite_success:', data);
    dispatch(actions.setTournState(data));
  });

  // TODO: Revert state and display error
  socket.on('send_invite_fail', (data) => {
    console.log('Socket event: send_invite_fail:', data);
  });

  //
  // Network
  //

  // Update entire client state
  socket.on('set_state', (data) => {
    console.log('Socket event: set_state:', data);
    dispatch(actions.setState(data));
  });

  socket.on('set_user_state', (data) => {
    console.log('Socket event: set_user_state:', data);
    dispatch(actions.setState(data));
  });

  socket.on('set_tourn_state', (data) => {
    console.log('Socket event: set_tourn_state:', data);
    dispatch(actions.setState(data));
  });
}
