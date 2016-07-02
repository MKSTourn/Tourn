import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Bracket from './bracket/Bracket.jsx';


function mapStateToProps(state) {
  console.log(state.getIn(['tournament', 'bracket']).toJS());
  return {
    size: {
      x: 100,
      y: 50,
    },
    players: state.getIn(['tournament', 'roster']).toJS(),
    matches: state.getIn(['tournament', 'bracket', 'matches']).toJS(),
    tournId: state.getIn(['tournament', 'info', 'tournId']),
    tournName: state.getIn(['tournament', 'info', 'tournName']),
    bracketSize: state.getIn(['tournament', 'bracket', 'bracketSize']),
    tournStatus: state.getIn(['tournament', 'bracket', 'tournStatus']),
    tournWinner: state.getIn(['tournament', 'bracket', 'tournWinner']),
    userId: state.getIn(['header', 'userData', 'userId']),
    tournOrganizer: state.getIn(['tournament', 'info', 'tournOrganizer']),
    start: state.getIn(['tournament', 'start']),
    mode: state.get('mode'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const BracketContainer = connect(mapStateToProps, mapDispatchToProps)(Bracket);

export default BracketContainer;
