import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import * as actions from '../../actions/action_creators.jsx';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

const Rules = (props) => {
  if (props.mode === 'Edit') {
    let _textChange = (e) => {
      let textValue = e.target.value;
      return props.updateRules(textValue);
    }
    return (
      <footer>
        <span>
          <label>Tournament Type: <br></br>
            <button onClick={props.updateType.bind(null, 'single')}>Single Elimination</button><br></br>
            <button onClick={props.updateType.bind(null, 'double')}>Double Elimination</button><br></br>
            <button onClick={props.updateType.bind(null, 'roundRobbin')}>Round Robbin</button>
          </label><br></br>
          <label>
            Rules: <br></br>
            <input
              onChange={_textChange}
              type="text"
              placeholder="Type Your Tourn Rules Here"
            >
            </input>
          </label>
        </span>
      </footer>
    );
  } else {
    return (
      <footer>
        <span>
          <label>Tournament Type: <br></br>
            <span>{props.tournType}</span>
          </label><br></br>
          <label>
            Rules: <br></br>
            <span>{props.rules}</span>
          </label>
        </span>
      </footer>
    );
  }
};



export default Rules;
