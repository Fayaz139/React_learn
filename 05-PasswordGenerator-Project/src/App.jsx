import { useState, useCallback, useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [num, setNum] = useState(false);
  const [char, setChar] = useState(false);
  const [pwd, setPwd] = useState("");

  const passRef = useRef(null);

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (num) str += "0123456789";
    if (char) str += "!@#$%^&*()_+=-[]{}`~";
    
    for (let i = 1; i <= length; i++) {
      let chaar = Math.floor(Math.random() *str.length )
      pass += str.charAt(chaar)
    }
    setPwd(pass)
  }, [length, num, char, pwd, setPwd]);

  const copyPasswordToClipBoard = useCallback(() => {
    passRef.current?.select();
    window.navigator.clipboard.writeText(pwd);
  }, [pwd])

  useEffect(() => {
    passwordGenerator()
  }, [length, num, char, setPwd])

  return (
    <>
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password Generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4 bg-white">
          <input
              type="text"
              value={pwd}
              className="outline-none w-full py-1 px-3"
              placeholder="Password"
              ref={passRef}
              readOnly
          />
          <button onClick={copyPasswordToClipBoard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'
          >copy</button>
      </div>
      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={6}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setLength(e.target.value)}}
          />
          <label>Length:{length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={num}
          id='numberInput'
          onChange={() => {
            setNum((prev) => !prev);
          }}
           />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input 
          type="checkbox"
          defaultChecked={char}
          id='characterInput'
          onChange={() => {
            setChar((prev) => !prev);
          }}
           />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
