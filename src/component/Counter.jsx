import React, { useEffect, useState } from 'react'

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
    useEffect(()=>console.log("Count Updated",[count]));
  return (
    
   <>
  
   <h1>counter App</h1>
   <h3>count = {count}</h3>
   <button onClick={handleIncrement}>Increment</button>
   <button onClick={handleDecrement}>Decrement</button>
     </>
  )
  {const number  = [1,2,3,4,5];
  const newnumber = number.map(function(n){
    return n*2;
  }) 
  console.log(newnumber);

  const newnumber2 = number.filter((n)=>n%2==0)
  
  }



}

export default Counter