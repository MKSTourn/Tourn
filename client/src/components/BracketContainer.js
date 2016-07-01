import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Bracket from './bracket/Bracket.jsx';


function mapStateToProps(state) {
  console.log(state.getIn(['tournament', 'bracket']).toJS());
  return {
    size: { x: window.innerWidth * 0.5, y: window.innerHeight * 0.5 },
    players: state.getIn(['tournament', 'roster']).toJS(),
    matches: state.getIn(['tournament', 'bracket', 'matches']).toJS(),
    tournId: state.getIn(['tournament', 'info', 'tournId']),
    tournName: state.getIn(['tournament', 'info', 'tournName']),
    bracketSize: state.getIn(['tournament', 'bracket', 'bracketSize']),
    mode: state.get('mode'),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const BracketContainer = connect(mapStateToProps, mapDispatchToProps)(Bracket);

export default BracketContainer;
