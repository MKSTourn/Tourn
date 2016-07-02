import React, { PropTypes } from 'react';
import Cookies from 'js-cookie';
import '../../../public/assets/styles/main.css';

const Logout = (props) => {
  const onLogoutClick = () => {
    props.changeMode('LoggedOut');
    console.log('cookies =', Cookies.get());
  };
  return (<img
    onClick={onLogoutClick}
    className="header-icons"
    src="./assets/img/logout.png" alt="Logout"
  ></img>);
};

Logout.propTypes = {
  changeMode: PropTypes.func,
};

export default Logout;

// const AlertListItem = (props) => {
//   const onDeleteClick = () => (
//     props.onAlertCancel(props.alert.get('_id'))
//   );
//   const onAcceptClick = () => (
//     props.onInviteAccept(props.alert.get('tournId'),
//                          props.alert.get('_id'))
//   );
//   return props.alert.get('isInvite') ?
//   (
//     <li>
//       {props.alert.get('message')}
//       <button onClick={onAcceptClick}>A</button>
//       <button onClick={onDeleteClick}>X</button>
//     </li>
//   ) :
//   (
//     <li>
//       {props.alert.get('message')}
//       <button onClick={onDeleteClick}>X</button>
//     </li>
//   );
// };

// AlertListItem.propTypes = {
//   onInviteAccept: PropTypes.func,
//   alert: PropTypes.object,
// };
