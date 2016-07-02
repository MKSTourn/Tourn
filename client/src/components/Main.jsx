import React from 'react';
import HeaderContainer from './HeaderContainer';
import RosterContainer from './RosterContainer.js';
import BracketContainer from './BracketContainer.js';
import ChatContainer from './ChatContainer';
import RulesContainer from './RulesContainer.js';

const Main = () => (
  <div>
    <header class="primary-header container group">
      <HeaderContainer />
    </header>
    <section class="main">
      <RosterContainer /><!--
      --><section class="col-2-3">
        <BracketContainer />
        <RulesContainer />
      </section><!--
      --><ChatContainer />
    </section>
  </div>
);

export default Main;
