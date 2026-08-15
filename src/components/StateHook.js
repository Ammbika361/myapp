import React,{useState } from 'react';
import './StateHook.css'


export default function StateHook() {

const[name,setName]=useState("");
const[age,setAge]=useState("");
const[email,setEmail]=useState("");
const[mobile,setMobile]=useState("");
const[dob,setDob]=useState(new Date());

  return (
    <div className="custom">
             <h2><center>Registeration form</center></h2>
     <form>
        <h3> name : {name} </h3><br/><h3> age : {age}</h3><br/><h3> my email : {email} </h3><br/><h3>mobile number:{mobile}</h3><br/>
       <h3>Date of birth: {dob.toLocaleDateString()}</h3>
       
        
     <div >
      <input onChange={(e)=>setName(e.target.value)} placeholder='put your name'/><br/>
      <input onChange={(e)=>setAge(e.target.value)} placeholder='age'/><br/>
      <input onChange={(e)=>setEmail(e.target.value)} placeholder='email'/><br/>
      <input onChange={(e)=>setMobile(e.target.value)}placeholder='mobile'/><br/>
      <input onChange={(e)=>setDob(new Date(e.target.value))} placeholder='dob'/>

    </div>
    </form>
    </div>
  )
  
}
