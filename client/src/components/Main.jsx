import React from 'react';
import HeaderContainer from './HeaderContainer';
import RosterContainer from './RosterContainer.js';
import BracketContainer from './BracketContainer.js';
import ChatContainer from './ChatContainer';
import RulesContainer from './RulesContainer.js';

const Main = () => (
  <div>
    <HeaderContainer />
    <RosterContainer />
    <BracketContainer />
    <ChatContainer />
    <RulesContainer />
  </div>
);

export default Main;
