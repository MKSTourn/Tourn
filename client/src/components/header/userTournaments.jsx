import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';





const UserTournaments = ({ showTournList, userTourns, toggleTournSelect }) => (
  showTournList ?
  <div>
    <button className="dropdownBtn" onClick={toggleTournSelect}>Tournaments List</button>
    <ol>
      {userTourns.map(function(tournament){
        return <li key={tournament.get('tournId')}>{tournament.get('tournName')}</li>
      })}
    </ol>
  </div>
  :
  <div>
    <button className="dropdownBtn" onClick={toggleTournSelect}>Tournaments List</button>
  </div>
)


export default UserTournaments;
