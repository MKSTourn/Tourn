// import * as

//
// Remote action middleware
//
// Middleware functions to handle server HTTP and socket IO requests
//

export default route => store => next => action => {
  // Make a request for a user with a given ID
  console.log('HTTP middleware', action);
  axios.get(route)
  .then(response => {
    // Pass server response to reducer
    action.sessionId = response.sessionId;
    action.state = response.state;
    return next(action);
  })
  .catch(error => {
    console.log("HTTP error", route, error);
  });
}
