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
            onInviteAccept={props.acceptInvite}
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

Alerts.propTypes = {
  showAlertList: PropTypes.bool,
  toggleAlerts: PropTypes.func,
  deleteAlert: PropTypes.func,
  acceptInvite: PropTypes.func,
  userAlerts: PropTypes.object,
};

export default Alerts;

const AlertListItem = (props) => {
  const onDeleteClick = () => (
    props.onAlertCancel(props.alert.get('alertId'))
  );
  const onAcceptClick = () => (
    props.onInviteAccept(props.alert.get('tournId'),
                         props.alert.get('alertId'))
  );
  return props.alert.get('isInvite') ?
  (
    <li>
      {props.alert.get('text')}
      <button onClick={onAcceptClick}>A</button>
      <button onClick={onDeleteClick}>X</button>
    </li>
  ) :
  (
    <li>
      {props.alert.get('text')}
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
};

AlertListItem.propTypes = {
  onInviteAccept: PropTypes.func,
  alert: PropTypes.object,
};
