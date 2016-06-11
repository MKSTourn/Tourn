import React from 'react';

import styles from './styles.module.css';

const HeaderComponent = () => 
<div className="topbar">
  <button className="addTournamentButton"><span className="symbol">+</span></button>
  <button className="dropdownBtn">All Tournaments</button>
  <h1 className="center">Tourn</h1>
</div>;

module.exports = HeaderComponent;