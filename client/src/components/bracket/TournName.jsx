import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const TournName = (props) => {
  const onNameChange = (e) => {
    const textValue = e.target.value;
    return props.updateName(textValue);
  };
  if (props.mode === 'Edit') {
    return (
      <input
        onChange={onNameChange}
        type="text"
        placeholder="Enter tourn name..."
      >
      </input>
    );
  }

  return (
    <h2 className="tournName"> {props.tournName} </h2>
  );
};

TournName.propTypes = {
  mode: PropTypes.string,
  tournName: PropTypes.string,
  updateName: PropTypes.func,
};

export default TournName;
