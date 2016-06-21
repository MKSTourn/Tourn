import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/action_creators.jsx';
import Main from './Main.jsx';


function mapStateToProps(state){
  return {
    header: state.header,
    tournament: state.tournament,
    mode: state.mode,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main);

export default App;
