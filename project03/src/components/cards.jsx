import React, { useState } from 'react';

function cards() {
  const [color, setColor] =useState("yellow");
  
  return (
    <>
      <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
          <div className='flex fixed flex-wrap justify-center bottom-12 inset-x-2 px-2'>
            <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-2 py-3 rounded-lg'>
                <button className=' outline-none px-4 py-1 rounded-full text-white' style={{backgroundColor:"Red"}} onClick={()=>{setColor("Red")}}>Red</button>              
                <button className='px-4  rounded-full text-white' style={{backgroundColor:"Black"}} onClick={()=>{setColor("Black")}}>Black</button>              
                <button className='px-4  rounded-full text-white' style={{backgroundColor:"Blue"}} onClick={()=>{setColor("Blue")}}>Blue</button>              
                <button className='px-4  rounded-full text-white' style={{backgroundColor:"Green"}} onClick={()=>{setColor("Green")}}>Green</button>              
                <button className='px-4  rounded-full text-white' style={{backgroundColor:"Gray"}} onClick={()=>{setColor("Gray")}}>Gray</button>              
            </div>
          </div>
      </div>
    </>
  )
}

export default cards
