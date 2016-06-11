import React from 'react';
import ReactDOM from 'react-dom';
var Header = require('./Header/HeaderComponent.jsx');

/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */

const MainComponent = () => <div> 
  <Header />
 </div>;

ReactDOM.render(
  <MainComponent />,
  
  document.getElementById('entrypoint')
);
