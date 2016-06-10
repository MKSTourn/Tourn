//user clicks round robbin tournament type
//creates a change tournament rules action
  //action takes userId?, rule, value
  //type: CHANGE_RULE
  //rule: Tournament_Type
  //value: Round Robbin
//reducer takes initial state, action
  //changes and returns state
//export reducer to spec for testing
var state = {
  tournament: {
    rule: { Tournament_Type: Value }
  }
}
var stateClone = {
  tournament: {
    rule: { Tournament_Type: 'Round Robbin' }
  }
}
var action = {
  type: CHANGE_RULE,
  rule: Tournament_Type,
  value: Value
}
import rules from '../../public/reducers/rules';

var assert = require('chai').assert;
  describe('rules_reducer', function(){
    it('should change a rule\'s value', function(){

    })
  })
