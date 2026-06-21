import React, {useState} from 'react'
export default function Mukesh(){
  const [name, setname] = useState('h');
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount(count + 1);
  };
  const decrement = () => {
    setCount(count - 1);
  }
  return(
    <div>
      <h1>
       name hai {name}
        </h1>
        <input type="text" 
        value={name}
         onChange={(e) => setname(e.target.value)} />
        <h1>new name hai :{name}</h1>
        <h2>Count: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div> 
  )
}
