import {List, Map, fromJS, Range} from 'immutable';
import {expect} from 'chai';

// import reducer from '../src/reducer';

describe('single elimination tournament logic', () => {

  it('selects the right bracket size for the number of players', () => {
    // Generate a sequence of player numbers
    const playerCounts = Range(1, 16, 3);

    // Generate a List of bracket sizes for each player number
    const bracketSizes = playerCounts.map(playerCount => getBracketSize(playerCount))
    expect(bracketSizes).to.equal(Seq.of(2, 4, 8, 16, 16, 16));
//     const initialState = Map();
//     const action = {
//       type: 'SET_STATE',
//       state: Map({
//         vote: Map({
//           pair: List.of('Trainspotting', '28 Days Later'),
//           tally: Map({Trainspotting: 1})
//         })
//       })
    // };
//     const nextState = reducer(initialState, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     }));
  });

  it('advances the winner to the next match', () => {
//     const initialState = Map();
//     const action = {
//       type: 'SET_STATE',
//       state: {
//         vote: {
//           pair: ['Trainspotting', '28 Days Later'],
//           tally: {Trainspotting: 1}
//         }
//       }
//     };
//     const nextState = reducer(initialState, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     }));
  });

  it('declares a winner when advancing the final match', () => {
//     const action = {
//       type: 'SET_STATE',
//       state: {
//         vote: {
//           pair: ['Trainspotting', '28 Days Later'],
//           tally: {Trainspotting: 1}
//         }
//       }
//     };
//     const nextState = reducer(undefined, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     }));
  });

//   it('handles VOTE by setting hasVoted', () => {
//     const state = fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     });
//     const action = {type: 'VOTE', entry: 'Trainspotting'};
//     const nextState = reducer(state, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       },
//       hasVoted: 'Trainspotting'
//     }));
//   });

//   it('does not set hasVoted for VOTE on invalid entry', () => {
//     const state = fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     });
//     const action = {type: 'VOTE', entry: 'Sunshine'};
//     const nextState = reducer(state, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       }
//     }));
//   });

//   it('removes hasVoted on SET_STATE if pair changes', () => {
//     const initialState = fromJS({
//       vote: {
//         pair: ['Trainspotting', '28 Days Later'],
//         tally: {Trainspotting: 1}
//       },
//       hasVoted: 'Trainspotting'
//     });
//     const action = {
//       type: 'SET_STATE',
//       state: {
//         vote: {
//           pair: ['Sunshine', 'Slumdog Millionaire']
//         }
//       }
//     };
//     const nextState = reducer(initialState, action);

//     expect(nextState).to.equal(fromJS({
//       vote: {
//         pair: ['Sunshine', 'Slumdog Millionaire']
//       }
//     }));
//   });
// });

