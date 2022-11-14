import React, { useReducer } from 'react';
import './App.css';
import ComA from './Compo/ComA'
import ComB from './Compo/ComB'
import ComC from './Compo/ComC'

export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
  switch (action) {
    case 'increment': 
      return state + 1
    case 'decrement':
      return state - 1
    case 'reset':
      return initialState
    default:
      return state
  }
}

function App() {
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <CountContext.Provider value={{ countDispatch: dispatch }} >
      <div className="App">
        Count : {count}
        <ComA />
        <ComB />
        <ComC />
      </div>
    </CountContext.Provider >
  );
}

export default App;
