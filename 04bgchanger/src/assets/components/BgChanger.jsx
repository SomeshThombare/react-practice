import { useState } from 'react'

function BgChanger() {
  const [color, setColor] = useState("olive") 

  return (
    <div 
      className='w-screen h-screen duration-200 transition-colors' 
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-4 py-2 rounded-3xl'>
          
          <button 
            onClick={() => setColor("red")}
            className='outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm' 
            style={{backgroundColor: "red"}}
          >
            Red
          </button>

          <button 
            onClick={() => setColor("brown")}
            className='outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm' 
            style={{backgroundColor: "brown"}}
          >
            Brown
          </button>

          <button 
            onClick={() => setColor("green")}
            className='outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm' 
            style={{backgroundColor: "green"}}
          >
            Green
          </button>

          <button 
            onClick={() => setColor("blue")}
            className='outline-none px-4 py-2 rounded-full text-white font-medium shadow-sm' 
            style={{backgroundColor: "blue"}}
          >
            Blue
          </button>

          <button 
            onClick={() => setColor("yellow")}
            className='outline-none px-4 py-2 rounded-full text-black font-medium shadow-sm' 
            style={{backgroundColor: "yellow"}}
          >
            Yellow
          </button>

        </div>
      </div>
    </div>
  )
}

export default BgChanger   
