import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

import Message from './ChatMessage.jsx';

const Chat = (props) => {
  let message = '';
  const updateMessage = (e) => {
    e.preventDefault();
    message = e.target.value;
  }
  const onSubmitClick = (e) => {
    e.preventDefault();
    props.submitChat(props.tournId,
                     message,
                     Date.now());
    message = '';
  };
  return (<section>
  <div className="messages">

    {props.messages.map((message, key) => {
      const messageElement = (<Message
        key={key}
        sender={message.author}
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
      // value={'Hi.'}
      className="newMessage"
    />
    <button type="submit">OK</button>
  </form>
  </div>
</section>);
};


Chat.propTypes = {
  messages: PropTypes.array,
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
