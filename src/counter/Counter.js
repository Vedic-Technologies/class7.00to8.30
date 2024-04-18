import React, { useState } from 'react'
import logo from '../assets/logoes/smile-mask.png'

const Counter = () => {

const [number,setNumber]=useState(2)

function increment()
{
   
   setNumber(number+1)
}

function decrement()
{
  if (number > 0){
    setNumber(number-1)
  }
   
}

  return (
<div className="">
<div className="mt-10 text-5xl text-blue-600">Counter App</div>
    <div className='min-w-[500px] bg-green-700 mt-32 rounded-full flex justify-center items-center text-xl text-white '>
    
    <div className="center bg-white text-black px-5 py-1 rounded-full cursor-pointer"
    onClick={decrement}
    >Decrement</div>
    <div className="m-3 text-3xl">{number}</div>
    <div className="center bg-white text-black px-5 py-1 rounded-full cursor-pointer"
    onClick={increment}
    >Increment</div>
    </div>
    </div>

  )
}

export default Counter
