import { useState } from "react"

export default function Counter() {
    let [count, setCount] = useState(0);


  return <div>

    <p>You clicked {count} times </p>

    <button onClick={()=> setCount(count + 1)}>Click Me</button>
  
  </div>
}
