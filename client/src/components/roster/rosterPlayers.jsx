import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const RosterPlayers = (props) => (
  <div>
    <h2>Roster</h2>
    <ul className="roster-players">
      {props.roster.map((player, key) =>
        <PlayerListItem
          key={key}
          player={player}
        />
      )}
    </ul>
  </div>
);

RosterPlayers.propTypes = {
  roster: PropTypes.object,
};

export default RosterPlayers;

const PlayerListItem = (props) =>
(
  <li>
    {props.player.get('playerName')}
  </li>
);

PlayerListItem.propTypes = {
  player: PropTypes.object,
};
