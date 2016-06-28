import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import UserTournaments from './userTournaments.jsx';
import Alerts from './alerts.jsx';
import Logout from './Logout.jsx';
import CreateTournament from './createTournament.jsx';

const Header = ({
  changeMode,
  showTournList,
  userTourns,
  toggleTournSelect,
  showAlertList,
  userAlerts,
  toggleAlerts,
  submitNewTourn,
  tournInfo,
  mode,
  selectTourn,
  deleteAlert,
  acceptInvite,
}) => mode === 'LoggedOut' ?
(
  <header className="topbar">
    <CreateTournament
      mode={mode}
      changeMode={changeMode}
      submitNewTourn={submitNewTourn}
      tournInfo={tournInfo}
    />
    <UserTournaments
      toggleTournSelect={toggleTournSelect}
      showTournList={showTournList}
      userTourns={userTourns}
      selectTourn={selectTourn}
    />
    <h1>Tourn</h1>
    <Alerts
      toggleAlerts={toggleAlerts}
      showAlertList={showAlertList}
      userAlerts={userAlerts}
      deleteAlert={deleteAlert}
      acceptInvite={acceptInvite}
    />
  <a href='/auth/facebook'><button>Login with Facebook</button></a>
  </header>
) :
(
  <header className="topbar">
    <CreateTournament
      mode={mode}
      changeMode={changeMode}
      submitNewTourn={submitNewTourn}
      tournInfo={tournInfo}
    />
    <UserTournaments
      toggleTournSelect={toggleTournSelect}
      showTournList={showTournList}
      userTourns={userTourns}
      selectTourn={selectTourn}
    />
    <h1>Tourn</h1>
    <Alerts
      toggleAlerts={toggleAlerts}
      showAlertList={showAlertList}
      userAlerts={userAlerts}
      deleteAlert={deleteAlert}
      acceptInvite={acceptInvite}
    />
<<<<<<< 281fe7056c0f89f883f0a0f66731c9cf2084edcc
    <Logout
      changeMode={changeMode}
    />
=======
  <a href=''><button>Logout</button></a>
>>>>>>> Fixed chat method bug, Implemented selecting tournaments from tournament list
  </header>
);

Header.propTypes = {
  changeMode: PropTypes.func,
  showTournList: PropTypes.bool,
  userTourns: PropTypes.object,
  toggleTournSelect: PropTypes.func,
  showAlertList: PropTypes.bool,
  userAlerts: PropTypes.object,
  toggleAlerts: PropTypes.func,
  submitNewTourn: PropTypes.func,
  tournInfo: PropTypes.object,
  mode: PropTypes.string,
  selectTourn: PropTypes.func,
  deleteAlert: PropTypes.func,
  acceptInvite: PropTypes.func,
};

export default Header;
