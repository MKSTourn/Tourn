import React, { PropTypes } from 'react';
import '../../../public/main.css';
import RosterPlayers from './rosterPlayers.jsx';
import AddPlayer from './addPlayer.jsx';
import StartTournament from './startTournament.jsx';

const Roster = (props) => (


  <section className="teaser col-1-3">
    <h4>Roster</h4>
    <RosterPlayers
      roster={props.roster}
    />
    <AddPlayer
      invite={props.invite}
      tournOrganizer={props.tournOrganizer}
      sendInvite={props.sendInvite}
      tournId={props.tournId}
    />
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
