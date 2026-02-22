import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  let details = {
    summary: "Hi im Fayaz im a Web Devloper Learning React, SpringBoot, Django, MySQL, Django, Express",
    button: "Know more"
  }

  return (
    <>
    <h1 className='bg-green-400 text-black p-4 rounded-3xl mb-4'>Tailwind test</h1>
    
    <Card username='Fayaz' data={details}/>
    </>
  )
}

export default App
