import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Header from './header/Header.jsx';


function mapStateToProps(state) {
  return {
    mode: state.get('mode'),
    tournInfo: state.getIn(['tournament', 'info']),
    showTournList: state.getIn(['header', 'showTournList']),
    userTourns: state.getIn(['header', 'userData', 'userTourns']),
    showAlertList: state.getIn(['header', 'showAlertList']),
    userAlerts: state.getIn(['header', 'userData', 'alerts']),
    invite: state.getIn(['tournament', 'start']),
    startTourn: state.getIn(['tournament', 'start']),
    startTourn: state.getIn(['tournament', 'start']),
    startTourn: state.getIn(['tournament', 'start']),
  };
}

      invite={props.invite}
      tournOrganizer={props.tournOrganizer}
      startTourn={props.startTourn}
      tournId={props.tournId}
      userId={props.userId}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;

