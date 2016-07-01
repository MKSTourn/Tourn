import React, { PropTypes } from 'react';

const BracketPlayer = (props) => (<div>
  <img
    style={{ float: 'left', width: 200, height: 200 }}
    src={props.player.playerPic}
    alt="Player 1"
    title={props.player.playerName}
  />
  <h2>
    {props.won ? 'Winner!' : 'Loser!'}
  </h2>
</div>);

BracketPlayer.propTypes = {
  player: PropTypes.object,
  won: PropTypes.bool,
};

export default BracketPlayer;
