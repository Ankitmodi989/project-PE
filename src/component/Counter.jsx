import React, { useState } from 'react'

const Counter = () => {

    // var count =0;
    const[count,setCount] = useState(0);
    function handleDecrement(){

    
        setCount(count=>count-1)
        set
        
    }
    function handleIncrement(){
       setCount(count=>count+1)
    }
    
  return (
    
   <>
   hello
   <h1>counter App</h1>
   <h3>count = {count}</h3>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={handleDecrement}>Decrement</button>
     </>
  )
}

export default Counter