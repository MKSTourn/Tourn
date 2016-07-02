import React, { PropTypes } from 'react';
import UserTournaments from './userTournaments.jsx';
import Alerts from './alerts.jsx';
import Logout from './Logout.jsx';
import CreateTournament from './createTournament.jsx';
import '../../../public/assets/styles/main.css';

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
}) => (mode === 'LoggedOut' ?
  <nav className="nav primary-nav">
    <CreateTournament
      mode={mode}
      changeMode={changeMode}
      submitNewTourn={submitNewTourn}
      tournInfo={tournInfo}
    />{/* <!--
    --> */}<UserTournaments
      toggleTournSelect={toggleTournSelect}
      showTournList={showTournList}
      userTourns={userTourns}
      selectTourn={selectTourn}
    />{/* <!--
    --> */}<li><h2><strong>Tourn</strong></h2></li>{/* <!--
    --> */}<Alerts
      toggleAlerts={toggleAlerts}
      showAlertList={showAlertList}
      userAlerts={userAlerts}
      deleteAlert={deleteAlert}
      acceptInvite={acceptInvite}
    />{/* <!--
    --> */}<li>
      <a href="auth/facebook/">
        <img className="header-icons"
          src="./assets/img/facebook-5-32.png"
        >
        </img>
      </a>
    </li>
  </nav>
 :

  <nav className="nav primary-nav">
    <CreateTournament
      mode={mode}
      changeMode={changeMode}
      submitNewTourn={submitNewTourn}
      tournInfo={tournInfo}
    />{/* <!--
    --> */}<UserTournaments
      toggleTournSelect={toggleTournSelect}
      showTournList={showTournList}
      userTourns={userTourns}
      selectTourn={selectTourn}
    />{/* <!--
    --> */}<li><h2><strong>Tourn</strong></h2></li>{/* <!--
    --> */}<Alerts
      toggleAlerts={toggleAlerts}
      showAlertList={showAlertList}
      userAlerts={userAlerts}
      deleteAlert={deleteAlert}
      acceptInvite={acceptInvite}
    />{/* <!--
    --> */}<Logout
      changeMode={changeMode}
    />
  </nav>
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
