import React, { useReducer } from 'react'
let initState = 0
let reducerFN = (state, action) => {
  switch(action){
    case 'increment':
      return state + 1;
    case 'decrement':
      return state - 1;
    case 'reset':
      return initState;
    default:
      return state;
    
  }
}
const Counter1 = () => {
  const[count, dispatch] = useReducer(reducerFN, initState)

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch('increment')}>Increment</button>
      <button onClick={() => dispatch('decrement')}>Decrement</button>
      <button onClick={() => dispatch('reset')}>Reset</button>
    </div>
  )
}

export default Counter1
