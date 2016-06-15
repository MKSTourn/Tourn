import React from 'react';
import { generateBracketPoints } from '../utilities/generateBracketPoints.jsx';

import { createStore } from 'redux';
import { connect } from 'react-redux';

const reducer = (state, action) => {
  if (!state) {
    return {
      players: 3,
      size: { x: 400, y: 400 },
    };
  }

  switch (action.type) {
    case 'increment':
      console.log(state.players + 1);
      return {
        players: state.players + 1,
        size: state.size,
      };

    case 'decrement':
      console.log(state.players - 1);
      return {
        players: state.players - 1,
        size: state.size,
      };

    case 'increaseSize':
      return {
        players: state.players,
        size: { x: state.size.x + 10, y: state.size.y + 10 },
      };

    case 'decreaseSize':
      return {
        players: state.players,
        size: { x: state.size.x - 10, y: state.size.y - 10 },
      };

    default:
      return state;
  }
};

const store = createStore(reducer);

const BracketComponent = (props) => {
  const points = generateBracketPoints(Math.pow(2, props.players), props.size.x, props.size.y);
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
    <button onClick={props.increment}> + </button>
    <button onClick={props.decrement}> - </button>
    <button onClick={props.increaseSize}> + size </button>
    <button onClick={props.decreaseSize}> - size </button>
  </div>);
};

const mapStateToProps = (state) => ({
  players: state.players,
  size: state.size,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => { dispatch({ type: 'increment' }); console.log('+'); },
  decrement: () => { dispatch({ type: 'decrement' }); console.log('-'); },
  increaseSize: () => dispatch({ type: 'increaseSize' }),
  decreaseSize: () => dispatch({ type: 'decreaseSize' }),
});

const Bracket = connect(
  mapStateToProps,
  mapDispatchToProps
)(BracketComponent);

export { Bracket, store };
