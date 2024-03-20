import React, { useContext } from 'react'
import { MyContext } from './MyContext'; 

const Element = () => {

 

    const user = useContext(MyContext);

  return (
   <>
      <h1>Hello</h1>
      
      <div>
      <h1>{user.name}</h1>
      <p>{user.place}</p>
      </div>
      
      
    </>
  )
}

export default Element
