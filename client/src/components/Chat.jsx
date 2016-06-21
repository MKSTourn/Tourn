import React from 'react';
import ReactDOM from 'react-dom';

const Chat = (props) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // let author, text;
    // this.props.onMessageSubmit({ text });
  };

  return (
    <div>
      <ul className="chatbox"></ul>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="New Message"
          value={'Hi.'}
          className="newMessage"
        />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export { Chat };
