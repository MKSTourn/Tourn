import store from '../store.jsx';
import * as actions from '../actions/action_creators.jsx';
const dispatch = store.dispatch;

// Configure client socket listeners to dispatch appropriate actions on socket events
export default function startListeners(socket) {
  //
  // Header
  //

  // Update user's tourn ID after submitting new tourn info
  socket.on('new_tourn_success', (data) => {
    console.log('Socket event: new_tourn_success:', data);
    dispatch(actions.updateId(data));
  });

  // TODO: Revert state and display error
  socket.on('new_tourn_fail', (data) => {
    console.log('Socket event: new_tourn_fail:', data);
  });

  // Update tournament state after submitting tournId
  socket.on('select_tourn_success', (data) => {
    console.log('Socket event: select_tourn_success:', data);
    dispatch(actions.setTournState(data));
  });

  // TODO: Revert state and display error
  socket.on('select_tourn_fail', (data) => {
    console.log('Socket event: select_tourn_fail:', data);
  });

  // Server sends back an OK after deleting an alert from user's alerts
  socket.on('delete_alert_success', (data) => {
    console.log('Socket event: delete_alert_success:', data);
  });

  // TODO: Revert state and display error
  socket.on('delete_alert_fail', (data) => {
    console.log('Socket event: delete_alert_fail:', data);
  });

  // Update user data state after accepting a tourn invite
  socket.on('accept_invite_success', (data) => {
    console.log('Socket event: accept_invite_success:', data);
    dispatch(actions.setUserState(data));
  });

  // TODO: Revert state and display error
  socket.on('accept_invite_fail', (data) => {
    console.log('Socket event: accept_invite_fail:', data);
  });

  //
  // Chat
  //

  // Update chat history to include a new message from
  // some user in the tourn
  socket.on('update_chat', (data) => {
    console.log('Socket event: update_chat:', data);
    dispatch(actions.updateChat(data));
  });

  // Server sends back an OK after user submits a new chat message
  socket.on('submit_chat_success', (data) => {
    console.log('Socket event: submit_chat_success:', data);
  });

  // TODO: Revert state and display error
  socket.on('submit_chat_fail', (data) => {
    console.log('Socket event: submit_chat_fail:', data);
  });

  //
  // Bracket
  //

  // Server sends back an OK after advancing a player in the tournament
  socket.on('update_bracket_success', (data) => {
    console.log('Socket event: update_bracket_success:', data);
  });

  // TODO: Revert state and display error
  socket.on('update_bracket_fail', (data) => {
    console.log('Socket event: update_bracket_fail:', data);
  });

  socket.on('advance_player', (data) => {
    console.log('Socket event: advance_player', data);
    dispatch(actions.advancePlayer(data));
  });

  //
  // Start
  //

  // Server sends back an OK after user presses Start Tourn button
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

  // Update roster after a user accepts an invite to the tournament
  socket.on('update_roster', (data) => {
    console.log('Socket event: update_roster:', data);
    dispatch(actions.updateRoster(data));
  });

  // Server sends back an OK after user sends an invite to another user
  socket.on('send_invite_success', (data) => {
    console.log('Socket event: send_invite_success:', data);
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

  // Update header state
  socket.on('set_user_state', (data) => {
    console.log('Socket event: set_user_state:', data);
    dispatch(actions.setState(data));
  });

  // Update tourn state
  socket.on('set_tourn_state', (data) => {
    console.log('Socket event: set_tourn_state:', data);
    dispatch(actions.setState(data));
  });
}
