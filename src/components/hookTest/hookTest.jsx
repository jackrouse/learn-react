import React, { useState,useEffect,useReducer  } from 'react';
// import {reducer,init,initState} from '@/reducers/count'
export function HookTest(){
  const [count,setCount] = useState(0)
  useEffect(()=>{
    document.title = count
  },[count])
  return (
    <>
      <div>{count}</div>
      <button onClick={()=>setCount(count+1)}>+</button>
    </>
  )
}


function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload);
    default:
      throw new Error();
  }
}


export  function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init);
  return (
    <>
      Count: {state.count}
      <button
        onClick={() => dispatch({type: 'reset', payload: initialCount})}>

        Reset
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
    </>
  );
}

export function Counter1() {
  const [count, setCount] = useState(0);

  function handleAlertClick() {
      setTimeout(() => {
      alert('You clicked on: ' + count);
      }, 3000);
  }
  // 多次点击click me按钮，然后点击一下show alert按钮，然后又快速点击多次click me按钮，alert出来的count是点击该按钮时的count还是最新的count？？
  // 实验表明，显示的是点击时的按钮，这就意味着handleAlertClick这个函数capture了被点击时的那个count，这也就是说每一轮的count都是不一样的
  return (
      <div>
          <p>You clicked {count} times</p>
          <button onClick={() => setCount(count + 1)}>
              Click me
          </button>
          <button onClick={handleAlertClick}>
              Show alert
          </button>
      </div>
  );
}
