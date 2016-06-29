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
        isOrganizer={props.isOrganizer}
        sendInvite={props.sendInvite}
        tournId={props.tournId}
      />
      <StartTournament
        invite={props.invite}
        isOrganizer={props.isOrganizer}
        startTourn={props.startTourn}
        tournId={props.tournId}
      />
    </div>
  </section>
);

Roster.propTypes = {
  roster: PropTypes.object,
  invite: PropTypes.bool,
  isOrganizer: PropTypes.bool,
  sendInvite: PropTypes.func,
  startTourn: PropTypes.func,
  tournId: PropTypes.string,
};

export default Roster;
