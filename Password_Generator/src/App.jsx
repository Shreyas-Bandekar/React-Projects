import { useState, useCallback, useEffect,useRef } from 'react'

function App() {

  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  // using useRef hook
  const passRef = useRef(null)

  //  use callback
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnoprstuvwxyz"

    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*()_[]{}~`"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)

    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  // callback function for copying password to clipboard
   const copyPassToClip = useCallback(()=>{
     passRef.current?.select()
    window.navigator.clipboard.writeText(password)
   },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])

  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-700'>
        <h1 className='text-center text-4xl text-white my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hiden mb-4'>
          <input type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='Password'
            readOnly
            ref={passRef}
          />

          <button 
            onClick={copyPassToClip}
            className='outline-none bg-rose-500 text-white px-3 py-0.5 shrink-0'>COPY</button>
        </div>


        <div className='flex text-sm gap-x-3'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
              min={6}
              max={30}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }} />
            <label> Length:{length}</label>
          </div>


          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev)
              }} />
            <label htmlFor="numberInput">Number</label>
          </div>



          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
              defaultChecked={charAllowed}
              id="charInput"
              onChange={() => {
                setCharAllowed((prev) => !prev)
              }} />
            <label htmlFor="charInput">Character</label>
          </div>

        </div>

      </div>

    </>
  )
}

export default App
