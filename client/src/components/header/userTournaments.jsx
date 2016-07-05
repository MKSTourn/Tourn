import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const UserTournaments = (props) => (
  props.showTournList ?
    <li className="flexLeft">
      <img
        onClick={props.toggleTournSelect}
        className="header-icons"
        src="./assets/img/trophy.png" alt="Submit New Tournament"
      ></img>
      <ul className="tournDropdownList">
        {props.userTourns.map((tournament, key) =>
          <TournListItem
            key={key}
            tournament={tournament}
            onTournamentClick={props.selectTourn}
          />
        )}
      </ul>
    </li>
    :
    <li className="flexLeft">
      <img
        onClick={props.toggleTournSelect}
        className="header-icons"
        src="./assets/img/trophy.png" alt="Submit New Tournament"
      ></img>
  </li>
);


UserTournaments.propTypes = {
  showTournList: PropTypes.bool,
  toggleTournSelect: PropTypes.func,
  userTourns: PropTypes.object,
  selectTourn: PropTypes.func,
};

export default UserTournaments;

const TournListItem = (props) => {
  const onTournClick = () => (
    props.onTournamentClick(props.tournament.get('tournId'))
  );
  return (
    <li onClick={onTournClick}>
      <button>
        {props.tournament.get('tournName')}
        &nbsp;>
      </button>
    </li>
  );
};

TournListItem.propTypes = {
  onTournamentClick: PropTypes.func,
  tournament: PropTypes.object,
};
