import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const RosterPlayers = (props) => (
  <div>
    <h2>Roster</h2>
    <ul className="roster-players">
      {props.roster.map(player =>
        <PlayerListItem
          key={player.get('playerId')}
          player={player}
        />
      )}
    </ul>
  </div>
);

export default RosterPlayers;

const PlayerListItem = (props) => {
  return (
    <li>
      {props.player.get('playerName')}
    </li>
  );
};