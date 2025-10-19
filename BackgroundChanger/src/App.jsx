import { useState } from 'react'

function App() {
  let [color, setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 '>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#FFB3BA"}} 
              onClick={() => setColor("#FFB3BA")}
            >
              Red
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#B3CDE3"}} 
              onClick={() => setColor("#B3CDE3")}
            >
              Blue
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#BFFCC6"}} 
              onClick={() => setColor("#BFFCC6")}
            >
              Green
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#FFFACD"}} 
              onClick={() => setColor("#FFFACD")}
            >
              Yellow
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#D8BFD8"}} 
              onClick={() => setColor("#D8BFD8")}
            >
              Purple
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#FFDAB9"}} 
              onClick={() => setColor("#FFDAB9")}
            >
              Orange
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#FFCCE5"}} 
              onClick={() => setColor("#FFCCE5")}
            >
              Pink
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#B2EBF2"}} 
              onClick={() => setColor("#B2EBF2")}
            >
              Cyan
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#CCFFCC"}} 
              onClick={() => setColor("#CCFFCC")}
            >
              Lime
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#D2B48C"}} 
              onClick={() => setColor("#D2B48C")}
            >
              Brown
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#C0C0C0"}} 
              onClick={() => setColor("#C0C0C0")}
            >
              Gray
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-black shadow-lg' 
              style={{backgroundColor: "#FFF8E7"}} 
              onClick={() => setColor("#FFF8E7")}
            >
              Off-White
            </button>
            <button 
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg' 
              style={{backgroundColor: "black"}} 
              onClick={() => setColor("black")}
            >
              Black
            </button>
          </div>
        </div>
    </div>
  )
}

export default App
