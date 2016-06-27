import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Rules from './rules/Rules.jsx';


function mapStateToProps(state) {
  console.log('mapStateToProps RulesContainer= ', state.toJS());
  return {
    mode: state.get('mode'),
    isOrganizer: state.getIn(['tournament', 'info', 'isOrganizer']),
    rules: state.getIn(['tournament', 'info', 'rules']),
    tournType: state.getIn(['tournament', 'info', 'tournType']),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const RulesContainer = connect(mapStateToProps, mapDispatchToProps)(Rules);

export default RulesContainer;
