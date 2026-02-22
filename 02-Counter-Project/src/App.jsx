import { useState } from 'react'
import './App.css'

function App() {
  let [count, setCount] = useState(0)

function add() {
  if (count >= 20) {
    return
  } else {
    setCount(count+1)
  }
}
function remove() {
  if (count < 1) {
    return
  } else {
    setCount(count-1)
  }
}

  return (
    <>
    <h1>Fayaz</h1>
    <h1>{count}</h1>
    <button onClick={add}>Add</button>
    <button onClick={remove}>Remove</button>
    </>
  )
}

export default App
