import React from 'react';
import ReactDOM from 'react-dom';

const Chat = () => {
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
          value={this.state.text ? this.state.text : undefined}
          className="newMessage"
        />
        <input type="submit" value="Post" />
      </form>
    </div>
  );
};

export { Chat };
