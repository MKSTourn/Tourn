import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';





const Alerts = ({ showAlertList, userAlerts, toggleAlerts }) => (
  showAlertList ?
  <div>
    <button onClick={toggleAlerts}>Alerts</button>
    <ol>
      {userAlerts.map(function(alert){
        return <li key={alert.get('alertId')}>{alert.get('text')}</li>
      })}
    </ol>
  </div>
  :
  <div>
    <button className="alertBtn" onClick={toggleAlerts}>Alerts</button>
  </div>
)


export default Alerts;
