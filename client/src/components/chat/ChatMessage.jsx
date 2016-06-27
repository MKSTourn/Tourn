import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

const ChatMessage = (props) => (<div>
  <p>
    <span className="author">{props.sender}</span>
    @
    <span className="timestamp">{props.timestamp}</span>
  </p>
  <p> {props.message} </p>
</div>);

ChatMessage.propTypes = {
  sender: PropTypes.string,
  timestamp: PropTypes.string,
  message: PropTypes.string,
};

export default ChatMessage;
