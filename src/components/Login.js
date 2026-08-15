import React,{useState} from 'react'



export default function Login({studentName,marks}) {
const [login,setLogin]=useState(""); 
const [username,setUsername]=useState("");
const [password,setPassword]=useState("");
const [price,setPrice]=useState("");
const[quantity,setQuantity]=useState(0);
const[message,setMessage]=useState("");
const[celcius,setCelcius]=useState(0);  
const [fah,setFah]=useState();
const[color,setColor]=useState("");
const[balance,setBalance]=useState("");
const[deposi,setDeposit]=useState("");
const[avbalance,setAv]=useState(0);
const[take,setWith]=useState("");
const result=marks>=40?"Pass":"Fail";



function ogin()
{
    if(username==='admin' && password==='1234')
    {
        setLogin ('welcome admin');
       // console.log("welcome admin");
    }
    else{
        setLogin('Invalid username and password');
       // console.log("invalid id and password");
    }
}

function ogout(){
  setUsername('');
  setPassword('');
  setLogin('');
}

function increment()
{
  setQuantity(quantity+1);
}

function decrement()
{
  if(quantity>1){
  setQuantity(quantity-1);
}}

function clea()
{
setMessage('');
}

function clear()
{
  setCelcius('');
  setFah('');
}

function red()
{
  setColor("red");
}

function yellow()
{
  setColor("yellow");
}

function green()
{
  setColor("green");
}

function deposit()
{
  if(balance+deposi>0)
  {
  setAv(deposi+balance);
  }
  else{
    setAv('empty');
  }
}

function Withdraw()
{
  if(balance>0)
  {
  setAv(balance-take);
  }
  else{
    setBalance("empty");
  }
}

function res()
{
 setBalance(0);
 setDeposit(0);
 setWith(0);
 setAv(0);
}


  return (
    <div>
      
      
      <input value={username} onChange={(e)=>setUsername(e.target.value)} placeholder='enter username'/><br/>
      <input value={password}onChange={(e)=>setPassword(e.target.value)} placeholder='enter password'/><br/>

      <button onClick={ogin}>Login</button>
      <button onClick={ogout}>Logout</button>
<p>{login}</p>

<br/>
<h3>{quantity}</h3>
       <button onClick={increment} >increment </button>
       <button onClick={decrement}>decrease</button>
 
     
       <input onChange={(e)=>setPrice(e.target.value)} placeholder='enter price'/>
       <h2>total :{price*quantity}</h2>

       <br/>
       <br/>
       <p> Message:{message}</p>
       <p>Characters:{message.length}</p>
       <input type="text" value={message} onChange={(e)=>setMessage(e.target.value)}placeholder='enter message'/>
       <button onClick={clea}>Clear</button>

         <br/><br/>
         <p>Celcius:{celcius}</p>
         <p>fahrenheit:{fah}</p>
      <input
  type="number"
  value={celcius}
  onChange={(e) => {
    const value = Number(e.target.value);

    setCelcius(value);
    setFah((value * 9) / 5 + 32);
  }}
  placeholder="enter celsius"
/>
<button onClick={clear}>clear</button>
 
 <br/><br/>
 <p style={{color}}>hello</p>
 <button onClick={red}>Red</button>
<button onClick={yellow}>yellow</button>
<button onClick={green}>green</button>

<br/><br/>

<p>Balance:{balance}</p>


<input value={balance}onChange={(e)=>setBalance(Number(e.target.value))} placeholder='enter balance'/>
<input value={deposi}onChange={(e)=>setDeposit(Number(e.target.value))} placeholder='enter deposit'/>
<input value={take}onChange={(e)=>setWith(e.target.value)}placeholder='enter withdrawl money'/>
<button onClick={deposit}>Deposit</button>
<button onClick={Withdraw}>Withdraw</button>
<p>Availabel Balance:{avbalance}</p>
<button onClick={res}>Reset</button>

<br/><br/>

<p> studentName={studentName}</p>
<p >marks={marks}</p>
<p >result={result}</p>



<p></p>
    </div>
  )
}
