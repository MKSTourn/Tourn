import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import { Grid, Row, Col } from 'react-bootstrap';
import { generateBracketPoints } from '../../utilities/generateBracketPoints.jsx';


const Bracket = ({size, players, matches}) => {
  let points = generateBracketPoints(
    Math.pow(2, Math.ceil(Math.log2(players.size))), size.x, size.y);
  console.log('points', points);
  return (
    <div className='bracket'>
      <svg
        width={size.x}
        height={size.y}
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
      {
        points.map((val, key) => {

          console.log('Point set!', val);

          let point1 = val[0];
          let point2 = val[1];
          let flag = val[2];
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
            <foreignObject x={point1.x} y={point1.y + 20} width={200}>
              <button>
                Zak
              </button>
            </foreignObject>
            : null});

          {flag ?
            <foreignObject x={point1.x} y={point1.y - 40} width={200}>
              <button>
                Zak
              </button>
            </foreignObject>
            : null});
          </g>);
        })
      }
      </svg>
    </div>
  )
};

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
