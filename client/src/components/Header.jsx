import React, { PropTypes } from 'react';
import '../styles/header_styles.css';
import * as actions from '../actions/action_creators.jsx';
import { connect } from 'react-redux';

const Header = React.createClass({
  render (){
    return (
      <div>
        <p>Hello World!</p>
      </div>
    )
  }
});


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
export default Header;
