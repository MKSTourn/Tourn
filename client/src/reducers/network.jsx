const setState = (state, action) => {
  if (action.type === 'SET_STATE') {
    return action.state;
  }

  return state;
};

export default setState;
