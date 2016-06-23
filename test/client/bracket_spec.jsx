import { List, Map, Seq, fromJS, Range } from 'immutable';
import * as chai from 'chai';
import chaiImmutable from 'chai-immutable';
import { getBracketSize, getNextMatch } from '../../client/src/utilities/bracket_helpers.jsx';
import bracket from '../../client/src/reducers/bracket.jsx';
import * as actions from '../../client/src/actions/action_creators.jsx';
import { describe, it } from 'mocha';
import {
         BRACKET_STATE,
         BRACKET_STATE_NEXT,
         BRACKET_FINAL_STATE,
         BRACKET_FINAL_STATE_NEXT,
       } from './states/bracket_spec_states.jsx';

chai.use(chaiImmutable);
const expect = chai.expect;

describe('single elimination bracket logic', () => {
  it('selects the right bracket size for the number of players', () => {
    const playerCounts = fromJS([1, 2, 3, 4, 5, 7, 9, 15]);
    const expectedPlayerCounts = fromJS([2, 2, 4, 4, 8, 8, 16, 16]);
    const bracketSizes = playerCounts.map(playerCount => getBracketSize(playerCount));

    expect(bracketSizes).to.equal(expectedPlayerCounts);
  });

  it('advances the winner to the next match', () => {
    const matches = fromJS([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
    const expectedMatches = fromJS([8, 8, 9, 9, 10, 10, 11, 11,
                                    12, 12, 13, 13, 14, 14, -1, null]);
    const bracketSize = 16;
    const nextMatches = matches.map(i => getNextMatch(i, bracketSize));

    expect(nextMatches).to.equal(expectedMatches);
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

    const nextState = bracket(initialState, action);
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

    const nextState = bracket(initialState, action);
    expect(nextState).to.deep.equal(expectedState);
  });
});
