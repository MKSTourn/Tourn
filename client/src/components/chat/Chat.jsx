import React, { PropTypes } from 'react';
import '../../../public/assets/styles/main.css';
import moment from 'moment';
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
                     moment().format('ddd, h:mmA'));
  };

  return (<section className="teaser col-1-3">
    <h4>Chat</h4>
    <div className="list-padding">
      <ul>
        {props.chat.history.map((message, key) => {
          const messageElement = (<Message
            key={key}
            img={message.authorPic}
            sender={message.authorName}
            timestamp={message.timeStamp}
            message={message.message}
          />);

          if (messageElement) {
            return messageElement;
          }

          return '';
        })}
      </ul>
    </div>
    <form className="roster-chat-input-container" onSubmit={onSubmitClick}>
      <input
        onChange={updateMessage}
        type="text"
        placeholder="Enter message..."
        value={props.chat.message}
        className="roster-chat-input"
      />
      <button className="btn-alt">Submit</button>
    </form>
  </section>);
};

Chat.propTypes = {
  submitChat: PropTypes.func,
  chat: PropTypes.object,
  tournId: PropTypes.string,
};

export default Chat;
