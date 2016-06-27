import React, { PropTypes }from 'react';
import '../../styles/header_styles.css';

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
        {props.userTourns.map(tournament =>
          <TournListItem
            key={tournament.get('tournId')}
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

export default UserTournaments;

const TournListItem = (props) => {
  const onTournClick = () => (
    props.onTournamentClick(props.tournament.get('tournId'))
  );
  return (
    <li onClick={onTournClick}>
      {props.tournament.get('tournName')}
    </li>
  );
};
