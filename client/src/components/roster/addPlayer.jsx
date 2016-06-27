import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const AddPlayer = (props) => {
	let invitee = '';
	const inviteeName = (e) => (
		invitee = e.target.value
	);
	const submitInvite = (props) => (
		props.sendInvite(props.tournId, invitee)
	);

	return (props.invite && props.isOrganizer ?
		<form>
			<input type="text" onChange={inviteeName}></input><br />
			<button type="submit" onClick={submitInvite}>Add Player</button>
		</form>
	:
	null);
};

export default AddPlayer;