import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const ChatMessage = (props) => (
  props.currentUser === props.sender ?
  <li className="transparent currentSender">
    <div className="testimonials-v4 currentSender">
      <div className="testimonials-v4-in">
        <label className=""> {(props.currentUser === props.sender).toString()} <span className="testimonials-author">{props.timeStamp}</span></label>
      </div>
      <img className="rounded-x currentSender" src={props.img} alt={props.sender}></img>
    </div>
  </li>
  :
  <li className="transparent">
    <div className="testimonials-v4">
      <div className="testimonials-v4-in">
        <label className=""> {props.message} <span className="testimonials-author">{props.timeStamp}</span></label>
      </div>
      <img className="rounded-x" src={props.img} alt={props.sender}></img>
    </div>
  </li>
);

ChatMessage.propTypes = {
  sender: PropTypes.string,
  timestamp: PropTypes.string,
  message: PropTypes.string,
};

export default ChatMessage;


// <span className="author">{props.sender}</span>
// @
// <span className="timestamp">{props.timestamp}</span>
