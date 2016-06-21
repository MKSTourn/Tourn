import React from 'react';
import { render } from 'react-dom';
// import HeaderContainer from './Header.jsx';
import Bracket from './Bracket.jsx';
import { Provider } from 'react-redux';
import store from '../store.jsx';
import Chat from './Chat.jsx';
import { Grid, Row, Col } from 'react-bootstrap';
import App from './App.jsx';

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

const Main = React.createClass({
  render(){
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
});

export default Main;
