import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const RosterPlayers = (props) => (
  <section className="list-padding">
    <ul className="roster-players">
      {props.roster.map((player, key) =>
        <PlayerListItem
          key={key}
          player={player}
        />
      )}
    </ul>
  </section>
);

RosterPlayers.propTypes = {
  roster: PropTypes.object,
};

export default RosterPlayers;

const PlayerListItem = (props) =>
(
  <li>
    <img
      className="rounded-x"
      src={props.player.get('playerPic')}
      alt={props.player.get('playerName')}
    >
    </img>{/* <!--
    --> */}<label>{props.player.get('playerName')}</label>
  </li>
);

PlayerListItem.propTypes = {
  player: PropTypes.object,
};
