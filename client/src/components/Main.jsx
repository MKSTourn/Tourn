import React, { PropTypes } from 'react';
import { render } from 'react-dom';
import HeaderContainer from './HeaderContainer';
import Bracket from './Bracket.jsx';
import { Provider } from 'react-redux';
import store from '../store.jsx';
import Chat from './Chat.jsx';
import { Grid, Row, Col } from 'react-bootstrap';


// import io from 'socket.io-client';
/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */


// console.log(Bracket);

// let handleMessageSubmit = (message) => (
//   //TODO: submit to the server and refresh the list
//   console.log('handleMessageSubmit ran')
// )
// const socket = io('http://localhost');
// const handleMessageSubmit = (author, text) => {
//   const timeStamp = Date.now();
//   socket.emit('chat message', { author: 'Mark', text, time: timeStamp });
// };

const Main = () => (
  <div>
    <HeaderContainer />
  </div>
)
    //TODO: <Bracket />, <Chat />, etc


        //{React.cloneElement(this.props.children, this.props)}


export default Main;
/////////////////////////////////////////////////////////////////
// var cloneWithProps = require('react-addons-clone-with-props');
//
// var _makeBlue = function(element) {
//   return cloneWithProps(element, {style: {color: 'blue'}});
// };
//
// var Blue = React.createClass({
//   render: function() {
//     var blueChildren = React.Children.map(this.props.children, _makeBlue);
//     return <div>{blueChildren}</div>;
//   }
// });
//
// ReactDOM.render(
//   <Blue>
//     <p>This text is blue.</p>
//   </Blue>,
//   document.getElementById('container')
// );
