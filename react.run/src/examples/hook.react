import React, { useState } from 'react'
import ReactDOM from 'react-dom'

function App() {
  const [count, setCount] = useState(0)

  function add() {
    setCount(count => count + 1)
  }

  return (
    <div>
      <button onClick={add}>count++</button>
      <p>count: {count}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
