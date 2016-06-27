import React, { PropTypes } from 'react';
import '../../styles/header_styles.css';

import Message from './ChatMessage.jsx';

const Chat = (props) => (<section>
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
    <input type="textbox" />
    <button />
  </div>
</section>);


Chat.propTypes = {
  messages: PropTypes.array,
};

export default Chat;

// <ul className="chatbox"></ul>
// <form onSubmit={handleSubmit}>
//   <input
//     type="text"
//     placeholder="New Message"
//     value={'Hi.'}
//     className="newMessage"
//   />
//   <input type="submit" value="Post" />
// </form>
// const handleSubmit = (e) => {
//   e.preventDefault();
//   // let author, text;
//   // this.props.onMessageSubmit({ text });
// };
