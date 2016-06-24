import React from 'react';
import { generateBracketPoints } from '../utilities/generateBracketPoints.jsx';

import { connect } from 'react-redux';

const BracketComponent = (props) => {
  console.log('Bracket!', props);
  const points = generateBracketPoints(
    Math.pow(2, Math.ceil(Math.log2(props.players.length))), props.size.x, props.size.y);
  return (<div
    className="svg-container"
    style={{
      position: 'relative',
      top: 200,
    }}
  >
    <svg
      width={props.size.x}
      height={props.size.y}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    {
      points.map((val, key) => {

        console.log('Point set!', val);

        const point1 = val[0];
        const point2 = val[1];
        const flag = val[2];
        return (<g><polyline
          points={`${point1.x},${point1.y} ${point2.x},${point2.y}`}
          key={key}
          style={
            /* "fill:white;stroke:black;stroke-width:4" */
          {
            fill: 'white',
            stroke: 'black',
            strokeWidth: '4',
          }}
        >
        </polyline>
        {flag ?
          <foreignObject x={point1.x} y={point1.y + 5} width={200} height={30}>
            <button style={{ zIndex: 9999 }}>
              Zak
            </button>
          </foreignObject>
          : null});

        {flag ?
          <foreignObject x={point1.x} y={point1.y - 30} width={200} height={30}>
            <button>
              Zak
            </button>
          </foreignObject>
          : null});
        </g>);
      })
    }
    </svg>
  </div>);
};

BracketComponent.propTypes = {
  players: React.PropTypes.array,
  size: React.PropTypes.object,
};

const mapStateToProps = (state) => ({
  size: { x: window.innerWidth * 0.66, y: window.innerHeight * 0.66 },
  players: [
    { playerId: 0, playerStatus: '', playerName: 'Zak', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
    { playerId: 1, playerStatus: '', playerName: 'Maher', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
    { playerId: 2, playerStatus: '', playerName: 'Adam', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
    { playerId: 3, playerStatus: '', playerName: 'Mark', playerPic: 'https://a.cocaine.ninja/pjeevc.jpg' },
  ],
  // matches: state.tournament.matches,
});

const mapDispatchToProps = () => ({

});

const Bracket = connect(
  mapStateToProps,
  mapDispatchToProps
)(BracketComponent);

export default Bracket ;
