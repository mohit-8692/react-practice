import { useCallback, useEffect, useRef, useState } from 'react';

function App() {
  const [length, setLength] = useState(8);
  const [char, setChar] = useState(false);
  const [num, setNum] = useState(false);
  const [password,setPassword] = useState();

  const xyz = useRef(null);

  const copyPassword = useCallback(()=>{
    xyz.current?.select()
    xyz.current?.setSelectionRange(0,5)
    window.navigator.clipboard.writeText(password);
  },[password])

  const passwordGenerator = useCallback(()=>{
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(num) str += "0123456789";
    if(char) str+= "!@#$%^&*()_+{}";

    for(let i = 1; i<= length; i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass+= str.charAt(char);
    }
    setPassword(pass);
  },[length, num, char, password]);

  useEffect(()=>{
    passwordGenerator();
  },[length, num, char, setPassword])
  return (
    <>
      <div className='flex justify-center'>
       <div className='w-full max-w-md mx--auto shadow-md rounded-lg px-4 py-2 my-8 text-yellow-500 bg-gray-600'>
        <h1 className='text-white text-center my-3 text-lg'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='password'
          readOnly
          ref={xyz} />
          <button className='outline-none bg-blue-700 text-white px-3 py-0.5' onClick={copyPassword}>
            copy
          </button>
        </div>
        <div className='flex text-sm gap-x-4'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length}</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            id='numberInput'
            value={num}
            className='cursor-pointer'
            onChange={()=>{setNum((prev)=>!prev);}} />
            <label htmlFor='numberInput'>Numbers</label>
          </div>

          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            id='charInput'
            value={char}
            className='cursor-pointer'
            onChange={()=>{setChar((prev)=>!prev);}} />
            <label htmlFor='charInput'>Character</label>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
