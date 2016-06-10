import React from 'react';
import ReactDOM from 'react-dom';
var Header = require('./HeaderComponent.jsx');

/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */

const MainComponent = () => <div> I am a test. </div>;

ReactDOM.render(
  <MainComponent />,
  <Header />,
  document.getElementById('entrypoint')
);
