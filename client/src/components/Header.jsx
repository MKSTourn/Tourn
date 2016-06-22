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
    console.log("Submitting new tourn");
    const tourn = {
      info: {
        tournId: null, // integer
        tournName: '', // tourn name string
        tournType: '', // tourn type string (single, double, roundrobin)
        isOrganizer: false, // true if the current user is the organizer of this tourn
        rules: '', // organizer defined rules text string
        bracketSize: null, // bracket size integer set to closest power of 2
      },
      chat: [
        {
          authorId: null, // id of user who wrote message
          comment: '', // user message string
          timeStamp: '',
        },
      ],
      start: false,
      invite: false,
      roster: [
        {
          playerId: null, // integer
          playerStatus: '', // text determining player's status in tournament
                            // 'Eliminated', 'Match X' where X is the player's active match
          playerName: '', // player name string
          playerPic: '', // player pic url string
        },
      ],
      bracket: {
        matches: [
          {
            player1: {
              userId: null,
              playerName: '',
              playerPic: '',
            },
            player2: {
              userId: null,
              playerName: '',
              playerPic: '',
            },
            status: '', // string denoting match status
                       // 'In Progress' or 'Player X' where X is the winner
          },
        ],
      },
    }
    dispatch(actions.submitNewTourn(tourn));
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
