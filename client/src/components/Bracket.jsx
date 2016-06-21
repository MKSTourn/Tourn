import React from 'react';
import { generateBracketPoints } from '../utilities/generateBracketPoints.jsx';

import { connect } from 'react-redux';

const BracketComponent = (props) => {
  const points = generateBracketPoints(
    Math.pow(2, props.players.length), props.size.x, props.size.y);
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
        const point1 = val[0];
        const point2 = val[1];
        return (<polyline
          points={`${point1.x},${point1.y} ${point2.x},${point2.y}`}
          key={key}
          style={
            /* "fill:white;stroke:black;stroke-width:4" */
          {
            fill: 'white',
            stroke: 'black',
            strokeWidth: '4',
          }
      } />);
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
  players: [],
});

const mapDispatchToProps = () => ({

});

const Bracket = connect(
  mapStateToProps,
  mapDispatchToProps
)(BracketComponent);

export { Bracket };
