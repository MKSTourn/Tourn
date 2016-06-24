import { fromJS } from 'immutable';
import * as chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { describe, it } from 'mocha';
import * as actions from '../../client/src/actions/action_creators.jsx';
import header from '../../client/src/reducers/header.jsx';
import {
        SUBMIT_STATE,
        SUBMIT_STATE_NEXT,
        DELETE_ALERT_STATE,
        DELETE_ALERT_STATE_NEXT,
        ACCEPT_INVITE_STATE,
        ACCEPT_INVITE_STATE_NEXT,
        TOGGLE_ALERT_STATE,
        TOGGLE_ALERT_STATE_NEXT,
        TOGGLE_SELECT_STATE,
        TOGGLE_SELECT_STATE_NEXT,
       } from './states/header_spec_states.jsx';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('header reducer', () => {
  it('handles new tournament submit', () => {
    const initialState = fromJS(SUBMIT_STATE);
    const expectedState = fromJS(SUBMIT_STATE_NEXT);
    const tourn = initialState.get('tournament');
    const action = actions.submitNewTourn(tourn);

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles tournament select', () => {
    const initialState = fromJS(SUBMIT_STATE);
    const expectedState = fromJS(SUBMIT_STATE_NEXT);

    const action = actions.selectTourn(1);

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles alert deletion', () => {
    const initialState = fromJS(DELETE_ALERT_STATE);
    const expectedState = fromJS(DELETE_ALERT_STATE_NEXT);

    const action = actions.deleteAlert(1);

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles invite acceptance', () => {
    const initialState = fromJS(ACCEPT_INVITE_STATE);
    const expectedState = fromJS(ACCEPT_INVITE_STATE_NEXT);

    const action = actions.acceptInvite(1, 0);

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles toggle tourn select', () => {
    const initialState = fromJS(TOGGLE_SELECT_STATE);
    const expectedState = fromJS(TOGGLE_SELECT_STATE_NEXT);

    const action = actions.toggleTournSelect();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles toggle alerts', () => {
    const initialState = fromJS(TOGGLE_ALERT_STATE);
    const expectedState = fromJS(TOGGLE_ALERT_STATE_NEXT);

    const action = actions.toggleAlerts();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });
});

