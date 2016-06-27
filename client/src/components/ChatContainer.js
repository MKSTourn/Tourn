import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Chat from './chat/Chat.jsx';


function mapStateToProps(state) {
  console.log('mapStateToProps showTournList', state.getIn(['header', 'showTournList']));
  console.log('mapStateToProps userTourns', state.getIn(['header', 'userData', 'userTourns']));

  console.log('CHAT STATE!', state.getIn('tournament'));

  return {
    messages: [{
      author: 'zak',
      timeStamp: '12-12-12',
      message: 'Hello!',
    }],
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
