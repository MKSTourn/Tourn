import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const CreateTournament = (props) => {
  if (props.mode === 'Edit') {
  return (<div>
    <button
      onClick={props.changeMode.bind(null, 'LoggedIn')}
      className="cancelNewTournBtn"
    >
      X
    </button>
    <button
      onClick={props.submitNewTourn.bind(null, props.tournInfo)}
      className="submitTournamentBtn"
    >
      S
    </button>
  </div>);
  }

  return (<div>
    <button
      onClick={props.changeMode.bind(null, 'Edit')}
      className="addTournamentButton"
    >
      +
    </button>
  </div>);
};


export default CreateTournament;
