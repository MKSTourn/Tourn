import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const AddPlayer = (props) => {
  let invitee = '';
  const inviteeName = (e) => (
		invitee = e.target.value
	);
  const sendPropInvite = (e) => {
    e.preventDefault();
		props.sendInvite(props.tournId, invitee);
	};

  return (props.invite && !props.start ?
    <form className="roster-chat-input-container">
      <input className="roster-chat-input" type="text" placeholder="Add Player/Team..." onChange={inviteeName}></input>{/* <!--
      --> */}<button className="btn-alt" onClick={sendPropInvite}>Submit</button>
    </form>
 :	    <form className="roster-chat-input-container">
       <input className="roster-chat-input" type="text" placeholder="Add Player/Team..." onChange={inviteeName}></input>{/* <!--
       --> */}<button className="btn-alt" onClick={sendPropInvite}>Submit</button>
     </form>);
};

AddPlayer.propTypes = {
  sendInvite: PropTypes.func,
  tournId: PropTypes.string,
  invite: PropTypes.bool,
  start: PropTypes.bool,
};

export default AddPlayer;
