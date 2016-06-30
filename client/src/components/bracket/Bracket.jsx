import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import { generateBracketPoints } from '../../utilities/generateBracketPoints.jsx';
import '../../styles/bracket_styles.css';
import TournName from './TournName.jsx';
import BracketPlayer from './BracketPlayer.jsx';
import BracketWinner from './BracketWinner.jsx';

const Bracket = ({ size, updateName, players, matches, updateBracket, tournName, mode }) => {
  const points = generateBracketPoints(
    Math.pow(2, Math.ceil(Math.log2(players.length))), size.x, size.y);

  return (
    <section className="bracket">
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
          const start = line[0];
          const end = line[1];
          const flag = line[2];

          let player1;
          let player2;
          let winner;

          if (matches[index]) {
            console.log(matches[index])
            player1 = matches[index].playerA;
            player2 = matches[index].playerB;
            winner = matches[index].winner ? matches[index].winner : { _id: null };

            return (<g>
              <polyline
                points={
                  `${start.x},${start.y} ${end.x},${end.y}`
                }
                key={index}
              />
              {flag && !!player1.playerName ?
                <foreignObject x={start.x} y={start.y - 54} width={200} height={40}>
                  {player1._id === winner._id ?
                    <BracketWinner player={player1} won /> :
                    winner._id ?
                      <BracketWinner player={player1} /> :
                      <BracketPlayer player={player1} updateBracket={updateBracket} />
                    }
                </foreignObject> : null
              }
              {flag && player2 && !!player2.playerName ?
                <foreignObject x={start.x} y={start.y + 4} width={200} height={40}>
                  {player2._id === winner._id ?
                    <BracketWinner player={player2} won /> :
                    winner._id ?
                      <BracketWinner player={player2} /> :
                      <BracketPlayer player={player2} updateBracket={updateBracket} />
                    }
                </foreignObject> : null
              }
            </g>);
          }
        })
      }
      </svg>
    </section>
  );
};

Bracket.propTypes = {
  size: PropTypes.object,
  players: PropTypes.array,
  matches: PropTypes.array,
  updateBracket: PropTypes.func,
  tournName: PropTypes.string,
  mode: PropTypes.string,
  updateName: PropTypes.func,
};

// <svg
//   width={size.x}
//   height={size.y}
//   xmlns="http://www.w3.org/2000/svg"
//   xmlnsXlink="http://www.w3.org/1999/xlink"
// >
// {
//   points.map((val, key) => {
//
//     console.log('Point set!', val);
//
//     const point1 = val[0];
//     const point2 = val[1];
//     const flag = val[2];
//     return (<g><polyline
//       points={`${point1.x},${point1.y} ${point2.x},${point2.y}`}
//       key={key}
//     >
//     </polyline>
//     {flag && !!matches[key].player1.playerName ?
//       <foreignObject x={point1.x} y={point1.y - 40} width={200} height={40}>
//         <button onClick={submitAdvance.bind(null, null, key, matches[key].player1)}>
//           {matches[key].player1.playerName}
//         </button>
//       </foreignObject>
//       : null});
//
//     {flag && !!matches[key].player2.playerName ?
//       <foreignObject x={point1.x} y={point1.y + 20} width={200} height={40}>
//         <button onClick={submitAdvance.bind(null, null, key, matches[key].player2)}>
//           {matches[key].player2.playerName}
//         </button>
//       </foreignObject>
//       : null});
//     </g>);
//   })
// }
// </svg>
export default Bracket;

// <Row className={'show-grid'}>
//   <Col md={12}>
//     <Header />
//   </Col>
// </Row>
// <Row className={'show-grid'}>
//   <Col md={3}>
//     <div id="roster"></div>
//   </Col>
//   <Col md={6}>
//     <Bracket />
//   </Col>
//   <Col md={3}>
//     <Chat />
//   </Col>
// </Row>
//
//
// if (props.mode === 'LoggedOut') {
//   return (<div className="topbar">
//     <h1 className="center">Tourn</h1>
//     <button onClick={props.changeMode} className="facebookLogin">Login</button>
//     <a onClick={props.changeMode('LoggedIn')} href="auth/facebook">Login with facebook</a>
//   </div>);
// } else if (props.mode === 'Edit') {
//   return (<div className="topbar">
//     <button onClick={props.changeMode} className="addTournamentButton">
//       <span className="symbol">+</span>
//     </button>
//     <button onClick={props.changeMode} className="submitTournamentButton">
//       <span className="symbol">√</span>
//     </button>
//     <button onClick={props.changeMode} className="dropdownBtn">
//      My Tournaments
//     </button>
//     <h1 className="center">Tourn</h1>
//     <button onClick={props.changeMode('LoggedOut')} className="alertBtn">
//      Alerts
//     </button>
//   </div>);
// }
//
// return (<div className="topbar">
//   <button onClick={props.changeMode} className="addTournamentButton">
//     <span className="symbol">+</span>
//   </button>
//   <button onClick={props.changeMode} className="submitTournamentButton">
//     <span className="symbol">√</span>
//   </button>
//   <button onClick={props.changeMode} className="dropdownBtn">
//    My Tournaments
//   </button>
//   <h1 className="center">Tourn</h1>
//   <button onClick={props.changeMode('LoggedOut')} className="alertBtn">
//    Alerts
//   </button>
// </div>);
// Header.propTypes = {
//   mode: PropTypes.string.isRequired,
//   changeMode: PropTypes.func.isRequired,
// };
//
// const mapStateToProps = (state) => ({
//   mode: state.get('mode'),
//   // userData: state.userData,
//   // showTournList: state.showTournList,
//   // showAlertList: state.showAlertList,
// });
//
// const mapDispatchToProps = (dispatch) => ({
//   changeMode: (mode) => {
//     dispatch(actions.changeMode(mode));
//   },
// });
//
// const HeaderContainer = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
//
