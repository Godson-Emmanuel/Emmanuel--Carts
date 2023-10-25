import React from 'react'
import { useState } from "react";

const Cart = () => {
const [num, setnum] = useState(0)
const [word, setword] = useState("item")


const handleClick=()=>{
  setnum(num +1)
 
  {num >= 1 ? setword("items") : setword("item")}

  // if (num >= 1 ){
  //   setword("Items")
  // }
  // else{
  //   setword("item")
  // }
 
  
}
  return (
    <div>
      {/* <h1>
        Cart {word}: {Count}
      </h1> */}
      <button onClick={handleClick}>
        Cart {word}:{num}
       </button>
    </div>
  )
}

export default Cart
