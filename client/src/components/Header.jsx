import React, { PropTypes } from 'react';
import '../styles/header_styles.css';
import * as actions from '../actions/action_creators.jsx';
import { connect } from 'react-redux';

function Header(props) {
  if (props.mode === 'LoggedOut') {
    return (<div className="topbar">
      <h1 className="center">Tourn</h1>
      <button onClick={props.changeMode} className="facebookLogin">Login</button>
      <a onClick={props.changeLoggedIn} href="auth/facebook">Login with facebook</a>
    </div>);
  } else if (props.mode === 'Edit') {
    return (<div className="topbar">
      <button onClick={props.changeMode} className="addTournamentButton">
        <span className="symbol">+</span>
      </button>
      <button onClick={props.changeMode} className="submitTournamentButton">
        <span className="symbol">√</span>
      </button>
      <button onClick={props.changeMode} className="dropdownBtn">
       My Tournaments
      </button>
      <h1 className="center">Tourn</h1>
      <button onClick={props.changeLoggedOut} className="alertBtn">
       Alerts
      </button>
    </div>);
  }

  return (<div className="topbar">
    <button onClick={props.changeMode} className="addTournamentButton">
      <span className="symbol">+</span>
    </button>
    <button onClick={props.submitTourn} className="submitTournamentButton">
      <span className="symbol">√</span>
    </button>
    <button onClick={props.changeMode} className="dropdownBtn">
     My Tournaments
    </button>
    <h1 className="center">Tourn</h1>
    <button onClick={props.changeLoggedOut} className="alertBtn">
     Alerts
    </button>
  </div>);
}

Header.propTypes = {
  mode: PropTypes.string.isRequired,
  changeMode: PropTypes.func.isRequired,
  changeLoggedOut: PropTypes.func.isRequired,
  changeLoggedIn: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mode: state.get('mode'),
  // userData: state.userData,
  // showTournList: state.showTournList,
  // showAlertList: state.showAlertList,
});

const mapDispatchToProps = (dispatch) => ({
  changeMode: (mode) => {
    console.log(mode);
    dispatch(actions.changeMode(mode));
  },

  changeLoggedIn: () => {
    dispatch(actions.changeMode('LoggedIn'));
  },

  changeLoggedOut: () => {
    dispatch(actions.changeMode('LoggedOut'));
  },

  changeLoggedIn: () => {
    dispatch(actions.changeMode('LoggedIn'));
  },

  changeLoggedOut: () => {
    dispatch(actions.changeMode('LoggedOut'));
  },
});

const HeaderContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default HeaderContainer;
