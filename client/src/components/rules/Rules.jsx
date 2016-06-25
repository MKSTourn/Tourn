import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import * as actions from '../../actions/action_creators.jsx';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

const Rules = () => (
  <footer>
    <p>Rules box is rendering</p>
  </footer>
);


export default Rules;

// <ul className="chatbox"></ul>
// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="New Message"
//     value={'Hi.'}
//     className="newMessage"
//   />
//   <input type="submit" value="Post" />
// </form>
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // let author, text;
//   // this.props.onMessageSubmit({ text });
// };
