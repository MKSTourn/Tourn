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
  let _onClick = () => (
    props.ontournamentClick(props.tournament.get('tournId'))
  )
  return (
    <li onClick={_onClick}>
      {props.tournament.get('tournName')}
    </li>
  );
};
