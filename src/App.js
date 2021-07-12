import logo from './logo.svg';
import React,{ useState } from 'react';
import './App.css';

  function App(initialCount){
    const [count,setCount]=useState(0);
  
    return(

      <>
        Count: {count}
       <button onClick={() => setCount(initialCount)}>Reset</button>
       <button onClick={() => setCount(prevCount => prevCount - 1)}>-</button>
       <button onClick={() => setCount(prevCount => prevCount + 1)}>+</button>
     </>
   );
  }

export default App;
