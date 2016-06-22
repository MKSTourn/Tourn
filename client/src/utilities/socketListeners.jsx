import store from '../store.jsx';
import * as actions from '../actions/action_creators.jsx';
const dispatch = store.dispatch;

// Configure client socket listeners to dispatch appropriate actions on socket events
export default function startListeners(socket) {
  // Update entire client state
  socket.on('set_state', function (data) {
    console.log('received message from server!:', data);
    dispatch(actions.setState(data));
  });

  // Update tourn ID after submitting new tourn info
  socket.on('new_tourn_success', function (data) {
    console.log('Socket event: new_tourn_success', data);
    dispatch(actions.updateId(data));
  });
  // TODO: Revert state and display error
  socket.on('new_tourn_fail', function (data) {
    console.log('Socket event: new_tourn_fail', data);
  });
  // Update tournament object after submitting tournId
  socket.on('select_tourn_success', function (data) {
    console.log('Socket event: select_tourn_success', data);
    dispatch(actions.setTournState(data));
  });
  // TODO: Revert state and display error
  socket.on('select_tourn_fail', function (data) {
    console.log('Socket event: select_tourn_fail', data);
  });
  // Update alerts after submitting alert to delete
  socket.on('delete_alert_success', function (data) {
    // TODO: decide whether client optimistically deletes alert
    //       or update alerts list on this event
    // Do nothing for now
    console.log('Socket event: delete_alert_success', data);
  });
  // TODO: Revert state and display error
  socket.on('delete_alert_fail', function (data) {
    console.log('Socket event: delete_alert_fail', data);
  });
  // Update user's tourn list
  socket.on('accept_invite_success', function (data) {
    console.log('Socket event: accept_invite_success', data);
    dispatch(actions.setTournState(data));
  });
  // TODO: Revert state and display error
  socket.on('accept_invite_fail', function (data) {
    console.log('Socket event: accept_invite_fail', data);
  });
  // Update user's tourn list
  socket.on('update_bracket_success', function (data) {
    console.log('Socket event: update_bracket_success', data);
    // TODO: decide whether client optimistically deletes alert
    //       or update alerts list on this event
    // Do nothing for now
  });
  // TODO: Revert state and display error
  socket.on('update_bracket_fail', function (data) {
    console.log('Socket event: update_bracket_fail', data);
  });

}
