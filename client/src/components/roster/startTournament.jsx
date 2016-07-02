import React, { PropTypes } from 'react';
import '../../../public/main.css';

const StartTournament = (props) => {
  const initTourn = () => (
		props.startTourn(props.tournId)
	);

  return (props.invite &&
          props.tournOrganizer === props.userId ?
    <button onClick={initTourn}>
			Start Tournament
    </button> : null
	);
};

StartTournament.propTypes = {
  tournId: PropTypes.string,
  startTourn: PropTypes.func,
  tournOrganizer: PropTypes.string,
  userId: PropTypes.string,
  invite: PropTypes.bool,
};

export default StartTournament;
