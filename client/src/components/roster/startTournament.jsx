import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const StartTournament = (props) => (
	props.invite && props.isOrganizer ?
		<button>
			Start Tournament
		</button>
	:
	null
);

export default StartTournament;