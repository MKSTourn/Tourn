import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

import Message from './ChatMessage.jsx';

const Chat = (props) => {
  const updateMessage = (e) => {
    e.preventDefault();
    props.updateMessage(e.target.value);
  };
  const onSubmitClick = (e) => {
    e.preventDefault();
    props.submitChat(props.tournId,
                     props.chat.message,
                     Date.now());
  };
  return (<section>
    <div className="messages">
      {props.chat.history.map((message, key) => {
        console.log('Chat message', message);
        const messageElement = (<Message
          key={key}
          sender={message.authorName}
          timestamp={message.timeStamp}
          message={message.message}
        />);

        if (messageElement) {
          return messageElement;
        }

        return '';
      })}
    </div>
    <div className="controls">
      <form onSubmit={onSubmitClick}>
        <input
          onChange={updateMessage}
          type="text"
          placeholder="Enter message..."
          value={props.chat.message}
          className="newMessage"
        />
        <button type="submit">OK</button>
      </form>
    </div>
  </section>);
};

Chat.propTypes = {
  chat: PropTypes.object,
};

export default Chat;

// <ul lassName="chatbox"></ul>
// <form onSubmit={handleSubmit}>
  // <input
    // type="text"
    // placeholder="New Message"
    // value={'Hi.'}
    // className="newMessage"
  // />
  // <input type="submit" value="Post" />
// </form>
// const handleSubmit = (e) => {
  // e.preventDefault();
  // let author, text;
  // this.props.onMessageSubmit({ text });
// };
