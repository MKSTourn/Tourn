import React, { PropTypes } from 'react';
import '../../../public/main.css';

const Rules = (props) => {
  if (props.mode === 'Edit') {
    const onTextChange = (e) => {
      const textValue = e.target.value;
      return props.updateRules(textValue);
    };
    return (
      <section className="teaser row col-rules-box">
        <label>
          <h4>Tournament Type:</h4><br />
            <button onClick={props.updateType.bind(null, 'single')}>Single Elimination</button><br></br>
            <button onClick={props.updateType.bind(null, 'double')}>Double Elimination</button><br></br>
            <button onClick={props.updateType.bind(null, 'roundRobbin')}>Round Robbin</button>
        </label>{/* <!--
        --> */}<label>
          <button>Start Tournament</button>
        </label>{/* <!--
        --> */}<label>
          <h4>Rules:</h4>
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
        <h4>Tournament Type:</h4><br />
        <span>{props.tournType}</span>
      </label>{/* <!--
      --> */}<label>
        <button>Start Tournament</button>
      </label>{/* <!--
      --> */}<label>
        <h4>Rules:</h4>
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

// <StartTournament
//   invite={props.invite}
//   tournOrganizer={props.tournOrganizer}
//   startTourn={props.startTourn}
//   tournId={props.tournId}
//   userId={props.userId}
// />
