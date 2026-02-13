// import React from 'react'

import Counter from "./component/Counter"
import EventToDo from "./component/EventToDo"

// import Wrapper from './component/Wrapper'
export default function App ()  {
  // const user = [
  //   {name: "Virat Kohli",
  //   country: "India",
  //   role: "Batman"
  //   },
  //    {name: "Dhoni",
  //   country: "India",
  //   role: "Wk-Batman"
  //   },
  //    {name: "hardik Pandya",
  //   country: "India",
  //   role: "Boller"
  //   },
  // ]
  return (
    <div>
      <EventToDo></EventToDo>
      <Counter></Counter>
      {/* <Wrapper user = {user}></Wrapper> */}
      
    </div>
  )
}
