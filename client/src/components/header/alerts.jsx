import React, { PropTypes } from 'react';
import '../../../public/main.css';

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
        {props.userAlerts.map((alert, key) =>
          <AlertListItem
            key={key}
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


const AlertListItem = (props) => {
  const onDeleteClick = () => (
    props.onAlertCancel(props.alert.get('_id'))
  );
  const onAcceptClick = () => (
    props.onInviteAccept(props.alert.get('tournId'),
                         props.alert.get('_id'))
  );
  return props.alert.get('isInvite') ?
  (
    <li>
      {props.alert.get('message')}
      <button onClick={onAcceptClick}>A</button>
      <button onClick={onDeleteClick}>X</button>
    </li>
  ) :
  (
    <li>
      {props.alert.get('message')}
      <button onClick={onDeleteClick}>X</button>
    </li>
  );
};

AlertListItem.propTypes = {
  onInviteAccept: PropTypes.func,
  alert: PropTypes.object,
};

AlertListItem.propTypes = {
  onInviteAccept: PropTypes.func,
  alert: PropTypes.object,
};

export default Alerts;
