import React from 'react'
import ComE from './ComE'

function ComC() {
  return (
    <div>
      <ComE />
    </div>
  )
}

export default ComC



























// import React, { useReducer } from 'react'

// const initialState = {
//     firstCounter: 0
// }
// const reducer = (state, action) => {
//     switch (action.type) {
//         case 'increment':
//             return { firstCounter: state.firstCounter + 1 }
//         case 'decrement':
//             return { firstCounter: state.firstCounter - 1 }
//         case 'reset':
//             return initialState
//         default:
//             return state
//     }
// }

// function ComA() {

//     const [count, dispatch] = useReducer(reducer, initialState)

//     return (
//         <div>
//             Count : {count.firstCounter}

//             <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
//             <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
//             <button onClick={() => dispatch({ type: 'reset' })}>Reset</button>

//         </div>
//     )
// }

// export default ComA