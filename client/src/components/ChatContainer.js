import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Chat from './chat/Chat.jsx';


function mapStateToProps(state) {

  console.log('CHAT STATE!', state.getIn('tournament'));

  return {
    messages: state.getIn(['tournament', 'chat']).toJS(),
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch);
}

const ChatContainer = connect(mapStateToProps, mapDispatchToProps)(Chat);

export default ChatContainer;
