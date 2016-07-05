import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';
import RosterPlayers from './rosterPlayers.jsx';
import AddPlayer from './addPlayer.jsx';

const Roster = (props) => (

  <aside className="teaser col-1-3">
    <h4>ROSTER</h4>
    <RosterPlayers
      roster={props.roster}
    />
    <AddPlayer
      invite={props.invite}
      tournOrganizer={props.tournOrganizer}
      sendInvite={props.sendInvite}
      tournId={props.tournId}
    />
</aside>
);

Roster.propTypes = {
  roster: PropTypes.object,
  sendInvite: PropTypes.func,
};

export default Roster;
