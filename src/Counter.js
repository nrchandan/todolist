import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(100)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

export default Counter;