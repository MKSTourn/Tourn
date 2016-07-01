import React, { PropTypes } from 'react';

const BracketPlayer = (props) => (<div>
  <img
    style={{ float: 'left', width: 50, height: 50 }}
    src={props.player.playerPic}
    alt="A player"
    title={props.player.playerName}
    onClick={props.submitAdvance.bind(null, props.tournId, props.matchIndex, props.player)}
  />
  {console.log('WHAT THE FUCK?', props.player)}
</div>);

BracketPlayer.propTypes = {
  player: PropTypes.object,
  submitAdvance: PropTypes.func,
  tournId: PropTypes.string,
  matchIndex: PropTypes.number,
};

export default BracketPlayer;
