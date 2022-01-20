import React, { useState } from 'react';




function App() {
    const [count, setCount] = useState(4) // sets count to 4 

  function decremantCount(){
    setCount(prevCount => prevCount - 1)

  }

  function incremenetCount(){
    setCount(prevCount => prevCount + 1)

  }

  // set click to function, which inturn manipulates use state 
  // sets the current count, from useState (4) 
  // .. same as #1 
  return (
    <>
    <button>onClick={decremantCount}-</button> 
    <span>{count}</span> 
    <button>onClick={incremenetCount}+</button>  
    </>

  );
}

export default App;
