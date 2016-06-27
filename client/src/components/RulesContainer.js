import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Rules from './rules/Rules.jsx';


function mapStateToProps(state){
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const RulesContainer = connect(mapStateToProps, mapDispatchToProps)(Rules);

export default RulesContainer;
