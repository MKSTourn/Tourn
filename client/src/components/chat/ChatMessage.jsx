import React, { PropTypes } from 'react';
import '../../../public/main.css';

const ChatMessage = (props) => (<li>
  <img className="rounded-x" src="assets/img/testimonials/img1.jpg" alt={props.sender}></img>
  <label> {props.message} </label>
</li>);

ChatMessage.propTypes = {
  sender: PropTypes.string,
  timestamp: PropTypes.string,
  message: PropTypes.string,
};

export default ChatMessage;


// <span className="author">{props.sender}</span>
// @
// <span className="timestamp">{props.timestamp}</span>
