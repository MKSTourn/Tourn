import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const Alerts = (props) => (
  props.showAlertList ?
    <div>
      <button
        className="alertBtn"
        onClick={props.toggleAlerts}
      >
        Alerts
      </button>
      <ul className="alertDropdownList">
        {props.userAlerts.map(alert =>
          <AlertListItem
            key={alert.get('alertId')}
            alert={alert}
            onAlertCancel={props.deleteAlert}
          />
        )}
      </ul>
    </div>
    :
    <div>
      <button
        className="alertBtn"
        onClick={props.toggleAlerts}
      >
        Alerts
      </button>
    </div>
);

export default Alerts;

const AlertListItem = (props) => {
  let _onClick = () => (
    props.onAlertCancel(props.alert.get('alertId'))
  )
  return (
    <li>
      {props.alert.get('text')}
      <button onClick={_onClick}>X</button>
    </li>
  );
};