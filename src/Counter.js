import React from 'react';
import {useSelector, useDispatch} from 'react-redux';


const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector(state => state.counter.counter)
  return (
    <center>
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch({type: "INCREMENT"})}>Increase</button>
      <button onClick={() => dispatch({type: "DECREMENT"})} disabled={counter === 0}>Decrease</button>
      <div>
        <button onClick={() => dispatch({type: "RESET"})}>Reset</button>
      </div>
    </div>
    </center>
  )
}

export default Counter;