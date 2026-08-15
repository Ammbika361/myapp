import React,{useState} from 'react';

export default function Hook() {
const[count,setCount]=useState(0);
const[name,setName]=useState("");
const [age,setAge]=useState(0);

function increase()
{
    setCount(count+1);
}

function decrease()
{
    setCount(count-1);
}
  return (
    <div>
     <h1>{count}</h1>
      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>

      <h1>hii,your name is{name} , and your age is{age} </h1>
      <input onChange={(e)=>setName(e.target.value)} placeholder='enter your Name'/>
      <input onChange={(e)=>setAge(e.target.value)} placeholder='enter your age'/>
      
    </div>
    

  )
}
