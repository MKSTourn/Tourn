import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';
import * as actions from '../../actions/action_creators.jsx';
import { connect } from 'react-redux';
import { Grid, Row, Col } from 'react-bootstrap';

const Roster = () => (
  <section>
  	<div className="roster-box">
  		<div className="roster-names-container">
  			<div className="roster-name">
  			</div>
  		</div>
  		<form>
  			<input type="text" /><br />
  			<button type="submit" value="submit" className="new-player-submit" >
  				Add to Tournament
  			</button>
  		</form>
  	</div>
  </section>
);


export default Roster;

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
