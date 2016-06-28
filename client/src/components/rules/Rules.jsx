import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const Rules = (props) => {
  if (props.mode === 'Edit') {
    const onTextChange = (e) => {
      const textValue = e.target.value;
      return props.updateRules(textValue);
    };
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
              onChange={onTextChange}
              type="text"
              placeholder="Type Your Tourn Rules Here"
            >
            </input>
          </label>
        </span>
      </footer>
    );
  }

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
};

Rules.propTypes = {
  updateType: PropTypes.func,
  updateRules: PropTypes.func,
  tournType: PropTypes.string,
  mode: PropTypes.string,
  rules: PropTypes.string,
};

export default Rules;
