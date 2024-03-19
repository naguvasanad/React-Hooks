import React, { useContext } from 'react'
import { MyContext } from './MyContext'; 
const Element = () => {

    const fname = useContext(MyContext);

  return (
    <div>
      <h1>Hello</h1>
      <h1>{fname}</h1>
    </div>
  )
}

export default Element
