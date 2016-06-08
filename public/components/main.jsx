import React from 'react';
import ReactDOM from 'react-dom';

class MainComponent extends React.Component {
	constructor() {
		super();
	}

	render() {
		return (<div>I am a test.</div>);
	}
}

ReactDOM.render(
	<MainComponent />,
	document.getElementById('entrypoint')
);