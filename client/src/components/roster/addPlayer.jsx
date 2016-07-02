import React, { PropTypes } from 'react';
import '../../../public/main.css';

const AddPlayer = (props) => {
  let invitee = '';
  const inviteeName = (e) => (
		invitee = e.target.value
	);
  const sendPropInvite = () => (
		props.sendInvite(props.tournId, invitee)
	);

  return (props.invite && !props.start ?
    <form className="roster-chat-input-container">
      <input className="roster-chat-input" type="text" onChange={inviteeName}></input>{/* <!--
      --> */}<button className="btn-alt" onClick={sendPropInvite}>Add Player</button>
    </form>
 :	null);
};

AddPlayer.propTypes = {
  sendInvite: PropTypes.func,
  tournId: PropTypes.string,
  invite: PropTypes.bool,
  start: PropTypes.bool,
};

export default AddPlayer;
