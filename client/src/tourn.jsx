import React from 'react';
import { render } from 'react-dom';
import App from './components/App.jsx';
import Header from './components/Header.jsx';

import { Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import store from './store.jsx';

const router = (
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}>
        <p>Hello World!</p>
      </Route>
    </Router>
  </Provider>
)

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
