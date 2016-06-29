import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const StartTournament = (props) => {
  const initTourn = () => (
		props.startTourn(props.tournId)
	);

  return (props.invite && props.isOrganizer ?
    <button onClick={initTourn}>
			Start Tournament
    </button> : null
	);
};

StartTournament.propTypes = {
  tournId: PropTypes.string,
  startTourn: PropTypes.func,
  isOrganizer: PropTypes.bool,
  invite: PropTypes.bool,
};

export default StartTournament;
