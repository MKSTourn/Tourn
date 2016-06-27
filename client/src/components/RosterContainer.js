import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Roster from './roster/Roster.jsx';


function mapStateToProps(state){
  return {
  	matches: state.getIn(['tournament', 'bracket', 'matches']);
  	invite: state.getIn(['tournament', 'invite' ]);
  	isOrganizer: state.getIn(['tournament', 'info', 'isOrganizer']);
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const RosterContainer = connect(mapStateToProps, mapDispatchToProps)(Roster);

export default RosterContainer;
