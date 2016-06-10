//user clicks round robbin tournament type
//creates a change tournament rules action
  //action takes userId?, rule, value
  //type: CHANGE_RULE
  //rule: Tournament_Type
  //value: Round Robbin
//reducer takes initial state, action
  //changes and returns state
//export reducer to spec for testing
import 'babel-polyfill';
import chai from 'chai';
var expect = chai.expect;
import rules from '../../public/reducers/rules';
import mocha from 'mocha';
var describe = mocha.describe;
var it = mocha.it;

/*rules_reducer*/

var frozenState = {
  tournament: {
    rules: {
      rule: 'Tournament_Type',
      value: '',
    }
  }
}
var stateClone = {
  tournament: {
    rules: {
      rule: 'Tournament_Type',
      value: 'Round Robbin',
    }
  }
}
var action = {
  type: 'CHANGE_RULE',
  rule: 'Tournament_Type',
  value: 'Round Robbin',
}


describe('rules_reducer', function(){
  it('should change a rule\'s value', function(){
    expect(rules(frozenState, action)).to.deep.equal(stateClone);
  })
})

/*rules_reducer end*/
