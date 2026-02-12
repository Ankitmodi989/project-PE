// import './App.css'
// import Footer from './component/Footer'
// import Header from './component/Header'


// function App() {

//   return (
//     <>
//     <Header title = "heelo props"></Header>
//     </>
//   )
// }

// export default App

// import React from 'react'
import Wrapper from './component/Wrapper'
export default function App ()  {
  const user = [
    {name: "Virat Kohli",
    country: "India",
    role: "Batman"
    },
     {name: "Dhoni",
    country: "India",
    role: "Wk-Batman"
    },
     {name: "hardik Pandya",
    country: "India",
    role: "Boller"
    },
  ]
  return (
    <div>
      <h1>User dashboard</h1>
      <Wrapper user = {user}></Wrapper>
      {/* <Wrapper title = "Product list ">

      </Wrapper> */}
    </div>
  )
}
