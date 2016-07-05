import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const Rules = (props) => {
  if (props.mode === 'Edit') {
    const onTextChange = (e) => {
      const textValue = e.target.value;
      return props.updateRules(textValue);
    };
    return (
      <section className="teaser row col-rules-box">
        <label>
          <h4>RULES:</h4>
          <input
            onChange={onTextChange}
            type="text"
            placeholder="Type Your Tourn Rules Here"
          >
          </input>
        </label>
      </section>
    );
  }

  return (
    <section className="teaser row col-rules-box">
      <label>
        <h4>RULES</h4>
        <span>{props.rules}</span>
      </label>
    </section>
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
