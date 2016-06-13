import React from 'react';

import styles from './styles.module.css';

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      logged_in: false
    }
    this.handleNewTourn = this.handleNewTourn.bind(this);
    this.handleAllTourns = this.handleAllTourns.bind(this);
    this.handleAlerts = this.handleAlerts.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleNewTourn() {
    if (this.state.logged_in) {
      console.log("Creating new tournament");
    } else {
      console.log("Please register or login to complete action");
    }
  }

  handleAllTourns() {
    if (this.state.logged_in) {
      console.log("Showing list of all user tournaments");
    } else {
      console.log("Please register or login to complete action");
    }
  }

  handleAlerts() {
    if (this.state.logged_in) {
      console.log("Showing list of all user alerts");
    } else {
      console.log("Please register or login to complete action");
    }
  }

  handleLogin() {
    console.log("Logged in!  I mean, uh, logged in.")
    this.setState({logged_in: true});
  }

  render() {
    return (
      <div className="topbar">
        <button onClick={this.handleNewTourn} className="addTournamentButton"><span className="symbol">+</span></button>
        <button onClick={this.handleAllTourns} className="dropdownBtn">All Tournaments</button>
        <h1 className="center">Tourn</h1>
        <button onClick={this.handleAlerts} className="alertBtn">Alerts</button>
        <button onClick={this.handleLogin} className="facebookLogin">Facebook Login</button>
      </div>
    );
  }
}





module.exports = HeaderComponent;

