import React, { PropTypes } from 'react';
import '../../../public/main.css';

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

CreateTournament.propTypes = {
  mode: PropTypes.string,
  changeMode: PropTypes.func,
  submitNewTourn: PropTypes.func,
  tournInfo: PropTypes.object,
};

export default CreateTournament;
