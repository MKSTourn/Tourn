import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const StartTournament = (props) => {
	const initTourn = () => (
		props.startTourn(props.tournamentId)
	);



	return (
		props.invite && props.isOrganizer ?
		<button onClick={initTourn}>
			Start Tournament
		</button>
		:
		null
	);
}
export default StartTournament;