import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';

const ChatMessage = (props) => (
  props.currentUser === props.sender ?
  <li className="transparent">
    <span className="testimonials-v4">
      <article className="testimonials-v4-in picLeft">
        <p className=""> {props.message} <span className="testimonials-author">{props.timeStamp}</span></p>
      </article>
      <aside className="picRight">
        <img className="rounded-x" src={props.img} alt={props.sender}></img>
      </aside>
    </span>
  </li>
  :
  <li className="transparent">
    <span className="testimonials-v4">
      <article className="testimonials-v4-in picRight">
        <p className=""> {props.message} <span className="testimonials-author">{props.timeStamp}</span></p>
      </article>
      <aside className="picLeft">
        <img className="rounded-x" src={props.img} alt={props.sender}></img>
      </aside>
    </span>
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
