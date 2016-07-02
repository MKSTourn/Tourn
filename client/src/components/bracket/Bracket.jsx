import React, { PropTypes } from 'react';
import '../../../public/main.css';
import { generateBracketPoints } from '../../utilities/generateBracketPoints.jsx';
import TournName from './TournName.jsx';
import BracketPlayer from './BracketPlayer.jsx';
import BracketWinner from './BracketWinner.jsx';

const Bracket = ({
  size,
  updateName,
  bracketSize,
  // players,
  matches,
  submitAdvance,
  tournName,
  tournId,
  userId,
  tournOrganizer,
  tournWinner,
  tournStatus,
  start,
  mode,
}) => {
  const points = generateBracketPoints(bracketSize, size.x, size.y);

  return (
    <section className="teaser row col-bracket-box">
      <TournName
        updateName={updateName}
        tournName={tournName}
        mode={mode}
      />
      <svg
        width={size.x}
        height={size.y}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
      {
        points.map((line, index) => {
          const lineStart = line[0];
          const end = line[1];
          const flag = line[2];

          let player1;
          let player2;
          // let winner;

          if (matches[index]) {
            player1 = matches[index].playerA;
            player2 = matches[index].playerB;
            // winner = matches[index].winner ? matches[index].winner : { _id: null };

            return (
              <g key={index}>
                <polyline
                  points={
                    `${lineStart.x},${lineStart.y} ${end.x},${end.y}`
                  }
                />
                {
                  flag && player1 && !!player1.playerName ?
                    <foreignObject
                      x={lineStart.x}
                      y={lineStart.y - 54}
                      width={200}
                      height={40}
                    >
                    {
                      tournStatus === 'Concluded' &&
                      player1.playerId === tournWinner.playerId ?
                        <BracketWinner
                          player={player1}
                          won
                        /> :
                        // winner._id ?
                          // <BracketWinner player={player1} /> :
                        <BracketPlayer
                          player={player1}
                          submitAdvance={submitAdvance}
                          matchIndex={index}
                          tournId={tournId}
                          userId={userId}
                          tournOrganizer={tournOrganizer}
                          start={start}
                          matches={matches}
                          matchIndex={index}
                        />
                    }
                    </foreignObject> : null
                }
                {flag && player2 && !!player2.playerName ?
                  <foreignObject
                    x={lineStart.x}
                    y={lineStart.y + 4}
                    width={200}
                    height={40}
                  >
                  {
                    tournStatus === 'Concluded' &&
                    player2.playerId === tournWinner.playerId ?
                      <BracketWinner
                        player={player2}
                        won
                      /> :
                      // winner._id ?
                      //   <BracketWinner player={player2} /> :
                      <BracketPlayer
                        player={player2}
                        submitAdvance={submitAdvance}
                        matchIndex={index}
                        tournId={tournId}
                        userId={userId}
                        tournOrganizer={tournOrganizer}
                        start={start}
                        matches={matches}
                        matchIndex={index}
                      />
                  }
                  </foreignObject> : null
                }
              </g>);
          }

          return (
            <g key={index}>
              <polyline
                points={
                  `${lineStart.x},${lineStart.y} ${end.x},${end.y}`
                }
              />
            </g>);
        })
      }
      </svg>
    </section>
  );
};

Bracket.propTypes = {
  bracketSize: PropTypes.number,
  size: PropTypes.object,
  // players: PropTypes.array,
  matches: PropTypes.array,
  submitAdvance: PropTypes.func,
  tournName: PropTypes.string,
  tournId: PropTypes.string,
  userId: PropTypes.string,
  mode: PropTypes.string,
  updateName: PropTypes.func,
  tournOrganizer: PropTypes.string,
  tournWinner: PropTypes.object,
  tournStatus: PropTypes.string,
  start: PropTypes.bool,
};

export default Bracket;
