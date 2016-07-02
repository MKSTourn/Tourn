import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const CreateTournament = (props) => {
  if (props.mode === 'Edit') {
    return (<span>
      <img
        onClick={props.changeMode.bind(null, 'LoggedIn')}
        className="header-icons"
        src="./assets/img/cancel.png" alt="Cancel New Tournament"
      >
      </img>
      <img
        onClick={props.submitNewTourn.bind(null, props.tournInfo)}
        className="header-icons"
        src="./assets/img/check-mark-32.png" alt="Submit New Tournament"
      >
      </img>
    </span>);
  }

  return (<span>
    <img
      onClick={props.changeMode.bind(null, 'Edit')}
      className="header-icons"
      src="./assets/img/plus.png" alt="Create New Tournament"
    ></img>
  </span>);
};

CreateTournament.propTypes = {
  mode: PropTypes.string,
  changeMode: PropTypes.func,
  submitNewTourn: PropTypes.func,
  tournInfo: PropTypes.object,
};

export default CreateTournament;
