import React from 'react'

export default function QuantityControl({qty,increase,decrease}) {
   
   
    

  return (
    <div>
      <br/><br/>


<button onClick={increase}>Increment</button>
<button onClick={decrease}>Decrement</button>

    </div>
  )
}
