import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const BracketPlayer = (props) => {
  if (props.userId === props.tournOrganizer &&
                       props.start &&
                       props.matches[props.matchIndex].status !== 'Concluded') {
    return (
      <div>
        <img
          className="bracket-image"
          src={props.player.playerPic}
          alt="A player"
          title={props.player.playerName}
          onClick={props.submitAdvance.bind(null, props.tournId, props.matchIndex, props.player)}
        >
        </img>
      </div>);
  }

  return (
    <div>
      <img
        className="bracket-image"
        src={props.player.playerPic}
        alt="A player"
        title={props.player.playerName}
      />
    </div>);
};

BracketPlayer.propTypes = {
  player: PropTypes.object,
  matches: PropTypes.array,
  submitAdvance: PropTypes.func,
  tournId: PropTypes.string,
  matchIndex: PropTypes.number,
  userId: PropTypes.string,
  tournOrganizer: PropTypes.string,
  start: PropTypes.bool,
};

export default BracketPlayer;
