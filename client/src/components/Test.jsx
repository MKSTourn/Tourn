import React from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/action_creators.jsx';

const Test = (props) => (<div style={{
  position: 'absolute',
  top: 100,
}}
>
  <button onClick={props.testNewTourn}> NEW TOURN </button>
  <button onClick={props.testSelectTourn}> SELECT TOURN </button>
  <button onClick={props.testUpdateBracket}> UPDATE BRACKET </button>
  <button onClick={props.testSendInvite}> SEND INVITE </button>
  <button onClick={props.testAcceptInvite}> ACCEPT INVITE </button>
  <button onClick={props.testDeleteInvite}> DELETE ALERT </button>
  <button onClick={props.testSendMessage}> SEND MESSAGE </button>
</div>);

const ExportTest = connect(() => ({}),
(dispatch) => ({
  // works
  testNewTourn: () => {
    dispatch(actions.submitNewTourn({
      name: 'Best Slav',
      rules: 'Last man standing wins.',
      type: 'Free for all',
    }));
  },

  // works
  testSelectTourn: () => {
    dispatch(actions.selectTourn(window.tournId));
  },

  // ???
  testDeleteAlert: () => {
    dispatch(actions.deleteAlert(window.alertId));
  },

  // next
  testUpdateBracket: () => {
    dispatch(actions.updateBracket(
      window.tournId, window.matchIndex, window.winner/* tourn Id, matchIndex, winner*/));
  },

  // ???
  testAcceptInvite: () => {
    dispatch(actions.acceptInvite(window.tournId, window.alertId/* Tourn Id, Alert Id*/));
  },

  // ???
  testSendInvite: () => {
    dispatch(actions.sendInvite(window.tournId, window.userId, window.message));
  },

  // ???
  testSendMessage: () => {
    dispatch(actions.submitChat(window.tournId, window.message, Date.now()));
  },
}))(Test);

export default ExportTest;
