import React, { PropTypes } from 'react';
import UserTournaments from './userTournaments.jsx';
import Alerts from './alerts.jsx';
import Logout from './Logout.jsx';
import CreateTournament from './createTournament.jsx';
import '../../../public/assets/styles/main.css';
import StartTournament from './startTournament.jsx';

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
  invite,
  tournOrganizer,
  startTourn,
  tournId,
  userId,
}) => (mode === 'LoggedOut' ?
  <nav className="nav primary-nav navigation">
    <ul>
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
      --> */}<li className="flexCenter"><h2><strong>Tourn</strong></h2></li>{/* <!--
      --> */}<Alerts
        toggleAlerts={toggleAlerts}
        showAlertList={showAlertList}
        userAlerts={userAlerts}
        deleteAlert={deleteAlert}
        acceptInvite={acceptInvite}
      />{/* <!--
      --> */}<li className="flexRight">
        <a href="auth/facebook/">
          <img
            className="header-icons"
            src="./assets/img/facebook-5-32.png"
            alt="Login with Facebook"
          >
          </img>
        </a>
      </li>
    </ul>
  </nav>
 :
  <nav className="nav primary-nav navigation">
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
    />
    <StartTournament
      invite={invite}
      tournOrganizer={tournOrganizer}
      startTourn={startTourn}
      tournId={tournId}
      userId={userId}
    />
     {/* <!--
    --> */}<li className="flexCenter"><h2><strong>Tourn</strong></h2></li>{/* <!--
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
  invite: PropTypes.bool,
  tournOrganizer: PropTypes.string,
  startTourn: PropTypes.func,
  tournId: PropTypes.string,
  userId: PropTypes.string,
};

export default Header;
