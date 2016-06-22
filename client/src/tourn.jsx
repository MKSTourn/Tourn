import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import Header from './components/Header.jsx';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.jsx';



render(
    <App store={store}>
      <Header>
        
      </Header>
    </App>, document.getElementById('app')
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
