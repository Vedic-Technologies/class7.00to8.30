import React, { useState } from 'react'

const Calculator = () => {
    const [textValue,setTextValue]=useState(0)
  return (
    <div>
      <div className='w-[500px] h-[300px] bg-slate-500 p-5'>
        <div className="w-full ">
             <input value={textValue} type="text" className='w-full h-[100px] rounded-xl text-5xl p-5 text-right' onChange={(e)=>setTextValue(e.target.value)}/>
        </div>

        <div id="buttons" className=''>
            <div className="center text-left bg-gray-300 w-fit text-5xl px-10 py-1 rounded-xl mt-5 cursor-pointer"
            onClick={()=>setTextValue(eval(textValue))}
            >=</div>
        </div>

      </div>
    </div>
  )
}

export default Calculator

