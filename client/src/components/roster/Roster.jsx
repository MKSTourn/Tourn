import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import RosterPlayers from './rosterPlayers.jsx';
import AddPlayer from './addPlayer.jsx';
import StartTournament from './startTournament.jsx';

const Roster = (props) => (

  <section>
    <div className="roster-box">
      <RosterPlayers
        roster={props.roster}
      />
      <AddPlayer
        invite={props.invite}
        tournOrganizer={props.tournOrganizer}
        sendInvite={props.sendInvite}
        tournId={props.tournId}
      />
      <StartTournament
        invite={props.invite}
        tournOrganizer={props.tournOrganizer}
        startTourn={props.startTourn}
        tournId={props.tournId}
        userId={props.userId}
      />
    </div>
  </section>
);

Roster.propTypes = {
  roster: PropTypes.object,
  invite: PropTypes.bool,
  tournOrganizer: PropTypes.string,
  sendInvite: PropTypes.func,
  startTourn: PropTypes.func,
  tournId: PropTypes.string,
  userId: PropTypes.string,
};

export default Roster;
