import { List, Map, Seq, fromJS, Range } from 'immutable';
import { expect } from 'chai';
import { getBracketSize, getNextMatch } from '../../client/src/utilities/bracket_helpers.jsx';
import rootReducer from '../../client/src/reducers/root.jsx';
import * as actions from '../../client/src/actions/action_creators.jsx';
import { describe, it } from 'mocha';
import {
         BRACKET_STATE,
         BRACKET_STATE_NEXT,
         BRACKET_FINAL_STATE,
         BRACKET_FINAL_STATE_NEXT,
       } from './states/bracket_spec_states.jsx';


describe('single elimination bracket logic', () => {
  it('selects the right bracket size for the number of players', () => {
    const playerCounts = [1, 2, 3, 4, 5, 7, 9, 15];
    const bracketSizes = playerCounts.map(playerCount => getBracketSize(playerCount));

    expect(bracketSizes).to.deep.equal([2, 2, 4, 4, 8, 8, 16, 16]);
  });

  it('advances the winner to the next match', () => {
    const matches = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    const bracketSize = 16;
    const nextMatches = matches.map(i => getNextMatch(i, bracketSize));

    expect(nextMatches).to.deep.equal([8, 8, 9, 9, 10, 10, 11, 11,
                                       12, 12, 13, 13, 14, 14, -1, null]);
  });

  it('only returns a next match index if the current match is valid', () => {
    const matchIndex = 16;
    const bracketSize = 16;
    const nextMatchIndex = getNextMatch(matchIndex, bracketSize);

    expect(nextMatchIndex).to.equal(null);
  });

  it('returns -1 to indicate winner when attempting to advance the final match', () => {
    const matchIndex = 14;
    const bracketSize = 16;
    const nextMatchIndex = getNextMatch(matchIndex, bracketSize);

    expect(nextMatchIndex).to.equal(-1);
  });
});

describe('bracket reducer', () => {
  it('produces correct next state given an in progress tournament', () => {
    const initialState = fromJS(BRACKET_STATE);
    const expectedState = fromJS(BRACKET_STATE_NEXT);

    const action = actions.updateBracket(0, 1, {
      userId: 4,
      playerName: 'Adam',
      playerPic: 'adamurl',
    });

    const nextState = rootReducer(initialState, action);
    expect(nextState).to.equal(expectedState);
  });

  it('produces correct next state given a tournament concluding final match', () => {
    const initialState = fromJS(BRACKET_FINAL_STATE);
    const expectedState = fromJS(BRACKET_FINAL_STATE_NEXT);

    const action = actions.updateBracket(0, 2, {
      userId: 1,
      playerName: 'Maher',
      playerPic: 'maherurl',
    });

    const nextState = rootReducer(initialState, action);
    expect(nextState).to.deep.equal(expectedState);
  });
});
