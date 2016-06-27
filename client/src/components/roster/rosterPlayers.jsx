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
  :
  <div>
    <button
      className="alertBtn"
      onClick={props.toggleAlerts}
    >
      Alerts
    </button>
  </div>
);

export default Alerts;

const AlertListItem = (props) => {
  let _onClick = () => (
    props.onAlertCancel(props.alert.get('alertId'))
  )
  return (
    <li>
      {props.alert.get('text')}
      <button onClick={_onClick}>X</button>
    </li>
  );
};