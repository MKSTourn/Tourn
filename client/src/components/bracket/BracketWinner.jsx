import React, { PropTypes } from 'react';

const BracketPlayer = (props) => (<div>
  <img
    style={{ float: 'left', width: 200, height: 200 }}
    src={props.player.playerPic}
    alt="Player 1"
    title={props.player.playerName}
  />
  <h2>
    Winner!
  </h2>
</div>);

BracketPlayer.propTypes = {
  player: PropTypes.object,
};

export default BracketPlayer;
