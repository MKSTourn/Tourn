import React from 'react';
import ReactDOM from 'react-dom';
import { HeaderComponent } from './Header.jsx';
import { Bracket, store } from './Bracket.jsx';


/* class MainComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (<div>I am a test.</div>);
  }
} */


// console.log(Bracket);

const MainComponent = (props) => (<div>
  <HeaderComponent />
  <Bracket store={props.store} />
</div>);

ReactDOM.render(
  <MainComponent store={store} />,
  document.getElementById('entrypoint')
);
