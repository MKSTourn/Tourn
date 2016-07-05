import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Header from './header/Header.jsx';


function mapStateToProps(state) {
  return {
    mode: state.get('mode'),
    tournBracket: state.getIn(['tournament', 'bracket']),
    tournInfo: state.getIn(['tournament', 'info']),
    showTournList: state.getIn(['header', 'showTournList']),
    userTourns: state.getIn(['header', 'userData', 'userTourns']),
    showAlertList: state.getIn(['header', 'showAlertList']),
    userAlerts: state.getIn(['header', 'userData', 'alerts']),
    invite: state.getIn(['tournament', 'invite']),
    tournOrganizer: state.getIn(['tournament', 'info', 'tournOrganizer']),
    startTourn: state.getIn(['tournament', 'start']),
    tournId: state.getIn(['tournament', 'info', 'tournId']),
    userId: state.getIn(['header', 'userData', 'userId']),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
