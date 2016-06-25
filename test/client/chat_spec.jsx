import { fromJS } from 'immutable';
import * as chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { describe, it } from 'mocha';
import * as actions from '../../client/src/actions/action_creators.jsx';
import header from '../../client/src/reducers/header.jsx';
import {
        SUBMIT_CHAT_INIT,
        SUBMIT_CHAT_NEXT,
        UPDATE_CHAT_INIT,
        UPDATE_CHAT_NEXT,
       } from './states/chat_spec_states.jsx';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('chat reducer', () => {
  it('handles new chat message submit', () => {
    const initialState = fromJS(SUBMIT_CHAT_INIT);
    const expectedState = fromJS(SUBMIT_CHAT_NEXT);
    const action = actions.submitChat(tourn);

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('handles chat update', () => {
    const initialState = fromJS(UPDATE_CHAT_INIT);
    const expectedState = fromJS(UPDATE_CHAT_NEXT);
    const newChat = [
      {
        authorId: 0, // id of user who wrote message
        authorName: 'Maher',
        authorPic: 'maherurl',
        message: 'Hello', // user message string
        timeStamp: 'sometime',
      },
      {
        authorId: 0, // id of user who wrote message
        authorName: 'Maher',
        authorPic: 'maherurl',
        message: 'Hi', // user message string
        timeStamp: 'somenewtime',
      },
    ];

    const action = actions.updateChat(fromJS(newChat));

    const nextState = header(initialState, action);
    expect(nextState).to.equal(expectedState);
  });
});

