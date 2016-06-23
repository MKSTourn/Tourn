import React, { PropTypes } from 'react';
import '../styles/header_styles.css';
import * as actions from '../actions/action_creators.jsx';
import { connect } from 'react-redux';

function Header(props) {
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
  submitTourn: () => {
    console.log('Submitting new tourn');
    dispatch(actions.submitNewTourn({
      name: 'Drinking Championship',
      type: 'Single Elimination',
      rules: 'All whiskey shots all the time',
    }));
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
