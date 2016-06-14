import React from 'react';
import { generateBracketPoints } from '../utilities/generateBracketPoints.jsx';

const Bracket = () => {
  const points = generateBracketPoints(8, 1280, 720);
  return (<div
    className="svg-container"
    style={{
      position: 'relative',
      top: 200,
    }}
  >
    <svg
      width="1280px"
      height="720px"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
    {
      points.map((val) => {
        const point1 = val[0];
        const point2 = val[1];
        return (<polyline
          points={`${point1.x},${point1.y} ${point2.x},${point2.y}`}
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

export { Bracket };
