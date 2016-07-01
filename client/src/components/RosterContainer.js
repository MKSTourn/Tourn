import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Roster from './roster/Roster.jsx';


function mapStateToProps(state) {
  return {
    invite: state.getIn(['tournament', 'invite']),
    tournOrganizer: state.getIn(['tournament', 'info', 'tournOrganizer']),
    roster: state.getIn(['tournament', 'roster']),
    tournId: state.getIn(['tournament', 'info', 'tournId']),
    userId: state.getIn(['header', 'userData', 'userId']),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const RosterContainer = connect(mapStateToProps, mapDispatchToProps)(Roster);

export default RosterContainer;
