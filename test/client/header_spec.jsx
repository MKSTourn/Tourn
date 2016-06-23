import { fromJS } from 'immutable';
import * as chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { describe, it } from 'mocha';
import * as actions from '../../client/src/actions/action_creators.jsx';
import header from '../../client/src/reducers/header.jsx';
import {

       } from './states/header_spec_states.jsx';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('header reducer', () => {
  it('handles new tournament submit', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles tournament select', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles alert delete', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles invite accept', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles toggle tourn select', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles toggle alerts', () => {
    const initialState = fromJS();
    const expectedState = fromJS();

    const action = actions.fillin();

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });
});

