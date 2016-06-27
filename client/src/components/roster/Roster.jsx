import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import * as actions from '../../actions/action_creators.jsx';
import { connect } from 'react-redux';
import RosterPlayers from './rosterPlayers.jsx';
import AddPlayer from './addPlayer.jsx';
import StartTournament from './startTournament.jsx';
import { Grid, Row, Col } from 'react-bootstrap';


const Roster = (props) => (

  <section>
  	<div className="roster-box">
  		<RosterPlayers 
         roster={props.roster}
      />
      <AddPlayer
        invite={props.invite}
        isOrganizer={props.isOrganizer}
        sendInvite={props.sendInvite}
      />
      <StartTournament invite={props.invite} isOrganizer={props.isOrganizer} />
  	</div>
  </section>
);


export default Roster;

// <ul className="chatbox"></ul>
// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="New Message"
//     value={'Hi.'}
//     className="newMessage"
//   />
//   <input type="submit" value="Post" />
// </form>
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // let author, text;
//   // this.props.onMessageSubmit({ text });
// };
