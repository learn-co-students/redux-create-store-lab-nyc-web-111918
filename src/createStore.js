export default function createStore(reducer) {
  let state;
  let listeners = [];
  const getState = () => state;

  const dispatch = action => {
    state = reducer(state, action);
    listeners.forEach(lister => listener())
  };
  const subscribe = listener => {
    listeners.push(listener)
    return () => {
      listeners = listeners.filter(l => l !== listener)
    }
  };

  dispatch({})

  return {getState, dispatch, subscribe }
}

function render() {
  const container = document.getElementById("container");
}
