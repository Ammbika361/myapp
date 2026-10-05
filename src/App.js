//import React, { useState } from 'react';
import './App.css';
//import Navbar from './components/Navbar';
//import './module2';
//import Hook from './components/hook';
//import StateHook from './components/StateHook';
//import Smart from './components/Smart';
//import Login from './components/Login';
//import QuantityControl from './components/QuantityControl';
import News from './components/News';
import Food from './components/Food';
import Foodwebsite from './components/Foodwebsite';

function App() {
//  const studentName='Ambika';
  /*const marks=77;
  const productname='mobile';
  const price=14000;
  //const quantity=1;
   const [qty,setQty]=useState(0);
    
   
    function increase()
    {
        setQty(qty+1);
    }

     function decrease()
    {
      if(qty>0)
      {
        setQty(qty-1);
      }
    }
   */
  return (
   // <div>
  
  
 //<StateHook/>

 //<Smart/>
<>


<Foodwebsite />
</>
/*

<Login studentName={studentName} marks={marks} />
<br/><br/>

<p>Product Name: {productname}</p>
      <p>Price: ₹{price}</p>
      <p>Quantity: {qty}</p>
      <p>Total: ₹{price * qty}</p>
 <QuantityControl
        quantity={qty}
        increase={increase}
        decrease={decrease}
      />

 
    </div>
    */
    
  );
  
}

export default App;
