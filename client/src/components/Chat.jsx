import React from 'react';
import ReactDOM from 'react-dom';

const Chat = () => {
	handleSubmit: function(e){
		e.preventDefault();
		let author, text;
		this.props.onMessageSubmit({text: text});
	}
	return (
		<ul className='chatbox'></ul>
		<form onSubmit={this.handleSubmit}>
			<input type='text' placeholder='New Message' value={undefined, this.state.text} className='newMessage' />
			<input type='submit' value='Post' />
		</form>
	)
}