import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Rules from './rules/Rules.jsx';


function mapStateToProps(state){
  console.log('mapStateToProps showTournList', state.getIn(['header','showTournList']));
  console.log('mapStateToProps userTourns', state.getIn(['header', 'userData', 'userTourns']));
  return {

  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const RulesContainer = connect(mapStateToProps, mapDispatchToProps)(Rules);

export default RulesContainer;
