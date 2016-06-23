// import { List, Map, fromJS, toJS } from 'immutable';
// import { expect } from 'chai';
// import { describe, it } from 'mocha';
// import { LoggedOut, LoggedIn, Edit } from './states/header_states';
// import rootReducer from '../../client/src/reducers/header';
// import { createNewTourn } from '../../client/src/actions/action_creators';

// describe('header reducer', () => {
//   it('handles CREATE_NEW_TOURN', () => {
//     const initialState = fromJS(LoggedIn);

//     const nextState = rootReducer(initialState, createNewTourn('Edit'));
//     expect(nextState.toJS()).to.deep.equal(Edit);
//   });
// });

// //   it('handles SET_STATE with plain JS payload', () => {
// //     const initialState = Map();
// //     const action = {
// //       type: 'SET_STATE',
// //       state: {
// //         vote: {
// //           pair: ['Trainspotting', '28 Days Later'],
// //           tally: {Trainspotting: 1}
// //         }
// //       }
// //     };
// //     const nextState = reducer(initialState, action);

// //     expect(nextState).to.equal(fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       }
// //     }));
// //   });

// //   it('handles SET_STATE without initial state', () => {
// //     const action = {
// //       type: 'SET_STATE',
// //       state: {
// //         vote: {
// //           pair: ['Trainspotting', '28 Days Later'],
// //           tally: {Trainspotting: 1}
// //         }
// //       }
// //     };
// //     const nextState = reducer(undefined, action);

// //     expect(nextState).to.equal(fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       }
// //     }));
// //   });

// //   it('handles VOTE by setting hasVoted', () => {
// //     const state = fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       }
// //     });
// //     const action = {type: 'VOTE', entry: 'Trainspotting'};
// //     const nextState = reducer(state, action);

// //     expect(nextState).to.equal(fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       },
// //       hasVoted: 'Trainspotting'
// //     }));
// //   });

// //   it('does not set hasVoted for VOTE on invalid entry', () => {
// //     const state = fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       }
// //     });
// //     const action = {type: 'VOTE', entry: 'Sunshine'};
// //     const nextState = reducer(state, action);

// //     expect(nextState).to.equal(fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       }
// //     }));
// //   });

// //   it('removes hasVoted on SET_STATE if pair changes', () => {
// //     const initialState = fromJS({
// //       vote: {
// //         pair: ['Trainspotting', '28 Days Later'],
// //         tally: {Trainspotting: 1}
// //       },
// //       hasVoted: 'Trainspotting'
// //     });
// //     const action = {
// //       type: 'SET_STATE',
// //       state: {
// //         vote: {
// //           pair: ['Sunshine', 'Slumdog Millionaire']
// //         }
// //       }
// //     };
// //     const nextState = reducer(initialState, action);

// //     expect(nextState).to.equal(fromJS({
// //       vote: {
// //         pair: ['Sunshine', 'Slumdog Millionaire']
// //       }
// //     }));
// //   });
