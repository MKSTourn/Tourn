import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from './Header/HeaderComponent.jsx';
import { Bracket } from './bracket.jsx';


/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */


// console.log(Bracket);

const MainComponent = () => (<div>
  <HeaderComponent />
  <Bracket />
</div>);

ReactDOM.render(
  <MainComponent />,
  document.getElementById('entrypoint')
);
