export default function createStore(reducer) {
  // add your code here
  let state = 0;

  function getState() {
    return state
  }

  function dispatch(action) {
    state = reducer(state, action)
    render()
  }

  return {
    dispatch,
    getState
  }
}

function render() {
  const container = document.getElementById('container');
}
