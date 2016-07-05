import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const Alerts = (props) => (
  props.showAlertList ?
    <li className="flexRight">
      <img
        className="header-icons"
        onClick={props.toggleAlerts}
        src="./assets/img/alerts.png" alt="Alerts List"
      >
      </img>
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
    </li>
    :
    <li className="flexRight">
      <img
        className="header-icons"
        onClick={props.toggleAlerts}
        src="./assets/img/alerts.png" alt="Alerts List"
      >
      </img>
    </li>
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
