import React, { useState } from "react";

export default function Smart() {
  const [count, setCount] = useState(10);
  const [age, setAge] = useState();
  const [name, setName] = useState("");

  function increase() {
    setCount(count + 1);
  }
  function decrease() {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  function incre() {
    setCount(count + 5);
  }

  function reset() {
    setCount(10);
  }

  function check() {
    if (count % 2 === 0) {
      return "Even";
    } else {
      return "Odd";
    }
  }

  function a() {
    if (age === "" || age === 0) {
      setAge();
    }
  }

  return (
    <div>
      <h1>{count}</h1>
      <p>{check()}</p>

      <button onClick={increase}>Increase</button>
      <button onClick={decrease}>Decrease</button>
      <button onClick={incre}>5+Increment</button>
      <button onClick={reset}>reset</button>

      <h3>
        {" "}
        Hello {name}you are {age} years old <br /> in 5 year you will be {age?(age + 5):''}
        <p>{a()}</p>   
      </h3>
      <input
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="enter a age"
      />
      <input
        onChange={(e) => setName(e.target.value)}
        placeholder="enter a name"
      />
    </div>
  );
}
