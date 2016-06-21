import React from 'react';
import { render } from 'react-dom';
import HeaderContainer from './Header.jsx';
import { Bracket } from './Bracket.jsx';
import { Provider } from 'react-redux';
import store from '../store.jsx';
import { Chat } from './Chat.jsx';
import { Grid, Row, Col } from 'react-bootstrap';

import { socket } from '../utilities/socketContainer.jsx';
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


const handleMessageSubmit = (author, text) => {
  const timeStamp = Date.now();
  socket.emit('chat message', { author: 'Mark', text, time: timeStamp });
};

const Main = () => (
  <Grid>
    <Row className={'show-grid'}>
      <Col md={12}>
        <HeaderContainer />
      </Col>
    </Row>
    <Row className={'show-grid'}>
      <Col md={3}>
        <div id="roster"></div>
      </Col>
      <Col md={6}>
        <Bracket />
      </Col>
      <Col md={3}>
        <Chat onMessageSubmit={handleMessageSubmit} />
      </Col>
    </Row>
    <Row>
      <Col md={3}>
        <span></span>
      </Col>
      <Col md={6}>
        <div id="rules"></div>
      </Col>
      <Col md={3}>
        <span></span>
      </Col>
    </Row>
  </Grid>
);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
