import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const CreateTournament = ({
  changeMode,
  submitNewTourn,
  mode,
  tournInfo,
}) => {
  if (mode === 'Edit') {
  return (<div>
    <button
      onClick={changeMode.bind(null, 'LoggedIn')}
      className="cancelNewTournBtn"
    >
      X
    </button>
    <button
      onClick={submitNewTourn.bind(null, tournInfo)}
      className="submitTournamentBtn"
    >
      S
    </button>
  </div>);
  }

  return (<div>
    <button
      onClick={changeMode.bind(null, 'Edit')}
      className="addTournamentButton"
    >
      +
    </button>
  </div>);
};


export default CreateTournament;
