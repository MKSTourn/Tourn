import React from 'react';
import '../styles/header_styles.css';
import PureRenderMixin from 'react-addons-pure-render-mixin';

var reactMixin = require('react-mixin');

class HeaderComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      logged_in: false,
    };
    this.handleNewTourn = this.handleNewTourn.bind(this);
    this.submitNewTourn = this.submitNewTourn.bind(this);
    this.handleAllTourns = this.handleAllTourns.bind(this);
    this.handleAlerts = this.handleAlerts.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
  }

  handleNewTourn() {
    if (this.state.logged_in) {
      console.log('Creating new tournament');
    } else {
      console.log('Please register or login to complete action');
    }
  }

  submitNewTourn() {
    if (this.state.logged_in) {
      console.log('New tournament submitted');
    } else {
      console.log('Please register or login to complete action');
    }
  }

  handleAllTourns() {
    if (this.state.logged_in) {
      console.log('Showing list of all user tournaments');
    } else {
      console.log('Please register or login to complete action');
    }
  }

  handleAlerts() {
    if (this.state.logged_in) {
      console.log('Showing list of all user alerts');
    } else {
      console.log('Please register or login to complete action');
    }
  }

  handleLogin() {
    console.log('Logged in!  I mean, uh, logged in.');
    this.setState({ logged_in: true });
  }

  render() {
    return (
      <div className="topbar">
        { this.state.logged_in ? <button onClick={this.handleNewTourn} className="addTournamentButton">
                                  <span className="symbol">+</span></button> : null }
        { this.state.logged_in ? <button onClick={this.submitNewTourn} className="submitTournamentButton">
                                  <span className="symbol">√</span></button> : null }
        { this.state.logged_in ? <button onClick={this.handleAllTourns} className="dropdownBtn">My Tournaments</button> : null }
        <h1 className="center">Tourn</h1>
        { this.state.logged_in ? <button onClick={this.handleAlerts} className="alertBtn">Alerts</button> : null }
        <a href="auth/facebook">Login with facebook</a>
        { !this.state.logged_in ? <button onClick={this.handleLogin} className="facebookLogin">Login</button> : null }
      </div>
    );
  }
}

reactMixin(HeaderComponent.prototype, PureRenderMixin);

export { HeaderComponent };
