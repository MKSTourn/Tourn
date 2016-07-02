import React from 'react';
import HeaderContainer from './HeaderContainer';
import RosterContainer from './RosterContainer.js';
import BracketContainer from './BracketContainer.js';
import ChatContainer from './ChatContainer';
import RulesContainer from './RulesContainer.js';
import '../../public/main.css';

const Main = () => (
  <div>
    <header className="primary-header container group">
      <HeaderContainer />
    </header>
    <section className="main">
      <RosterContainer />{/* <!--
      --> */}<section className="col-2-3">
        <BracketContainer />
        <RulesContainer />
      </section>{/* <!--
      --> */}<ChatContainer />
    </section>
  </div>
);

export default Main;
