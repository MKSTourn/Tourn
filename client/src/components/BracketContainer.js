import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Bracket from './bracket/Bracket.jsx';


function mapStateToProps(state) {
  return {
    size: { x: window.innerWidth * 0.66, y: window.innerHeight * 0.66 },
    players: state.getIn(['tournament', 'roster']).toJS(),
    matches: state.getIn(['tournament', 'bracket', 'matches']).toJS(),
    tournamentId: state.getIn(['tournament', 'info', 'tournId']),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const BracketContainer = connect(mapStateToProps, mapDispatchToProps)(Bracket);

export default BracketContainer;
