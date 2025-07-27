import { useState,useCallback,useEffect,useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const[numAllowed,setnumAllowed]=useState(false)
  const[charAllowed,setcharAllowed]=useState(false)
  const[password,setPassword]=useState("")
  const passwordRef=useRef(null)
  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numAllowed){
      str +='0123456789'
    }
    if(charAllowed){
      str+='!@#$%^&*'
    }

    for(let i=1;i<=length;i++){
      let char= Math.floor(Math.random()*str.length+1)
      pass+=str.charAt(char)
    }
    setPassword(pass)
  
  },[length,numAllowed,charAllowed,setPassword])

  const passwordCopyToClipboard=useCallback(()=>{
    passwordRef.current?.select()
    passwordRef.current?.setSelectionRange(0,20)
  window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{passwordGenerator()},[length,numAllowed,charAllowed,passwordGenerator])
    
   return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-700'>
        <h1 className='text-white text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text"
          value={password}
          placeholder='password'
          readOnly
          className='outline-none w-full py-1 px-3'
          ref={passwordRef} />
          <button 
          onClick={passwordCopyToClipboard}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'>
          copy
          </button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type="range"
            min={8}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={numAllowed}
            id='numberInputs'
            onChange={()=>{
              setnumAllowed((prev)=>!prev)
            }} />
            <label >Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox"
            defaultChecked={charAllowed}
            id='numberInputs'
            onChange={()=>{
              setcharAllowed((prev)=>!prev)
            }} />
            <label >Charecter</label>
          </div>
        </div>
      </div>
    </>
  )

}
export default App