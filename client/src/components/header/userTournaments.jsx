import React, { PropTypes } from 'react';
import '../../../public/main.css';

const UserTournaments = (props) => (
  props.showTournList ?
    <div>
      <button
        className="dropdownBtn"
        onClick={props.toggleTournSelect}
      >
        Tournaments List
      </button>
      <ul className="tournDropdownList">
        {props.userTourns.map((tournament, key) =>
          <TournListItem
            key={key}
            tournament={tournament}
            onTournamentClick={props.selectTourn}
          />
        )}
      </ul>
    </div>
    :
    <div>
      <button
        className="dropdownBtn"
        onClick={props.toggleTournSelect}
      >
        Tournaments List
      </button>
    </div>
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
