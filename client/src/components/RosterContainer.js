import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Roster from './roster/Roster.jsx';


function mapStateToProps(state){
  console.log(state.get('tournament').get('roster').toJS());
  console.log(state.getIn(['tournament', 'roster']).toJS());
  return {
  	invite: state.getIn(['tournament', 'invite']),
  	isOrganizer: state.getIn(['tournament', 'info', 'isOrganizer']),
  	roster: state.getIn(['tournament', 'roster']),
  	tournamentId: state.getIn(['tournament', 'info', 'tournamentId'])
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const RosterContainer = connect(mapStateToProps, mapDispatchToProps)(Roster);

export default RosterContainer;
