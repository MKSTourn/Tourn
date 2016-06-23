import React from 'react';
import { render } from 'react-dom';
import Main from './components/Main.jsx';
import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.jsx';
import startListeners from './utilities/socketListeners.jsx';
import { socket } from './utilities/socketContainer.jsx';

// Kick off event listeners for server events
startListeners(socket);

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
  // <Row className={'show-grid'}>
  //   <Col md={12}>
  //     <Header />
  //   </Col>
  // </Row>
  // <Row className={'show-grid'}>
  //   <Col md={3}>
  //     <div id="roster"></div>
  //   </Col>
  //   <Col md={6}>
  //     <Bracket />
  //   </Col>
  //   <Col md={3}>
  //     <Chat />
  //   </Col>
  // </Row>
  // <Row>
  //   <Col md={3}>
  //     <span></span>
  //   </Col>
  //   <Col md={6}>
  //     <div id="rules"></div>
  //   </Col>
  //   <Col md={3}>
  //     <span></span>
  //   </Col>
  // </Row>
