import React, { PropTypes } from 'react';

const BracketPlayer = (props) => (<div>
  <img
    style={{ float: 'left', width: 50, height: 50 }}
    src={props.player.playerPic}
    alt="Player 1"
    title={props.player.playerName}
    onClick={props.updateBracket.bind(null, props.player)}
  />
</div>);

BracketPlayer.propTypes = {
  player: PropTypes.object,
  updateBracket: PropTypes.func,
};

export default BracketPlayer;
