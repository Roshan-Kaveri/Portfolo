import React from 'react'
import RazorpayButton from './RazorPayButton'
import ColoredButton from '../General/Buttons/ColoredButton'


export default function Profile() {
  return (
    <>
      <div class="flex flex-col h-[calc(100vh-6.5rem)] items-center justify-center text-white">

      {/* <div className="flex">
   
        <h1 className='text-8xl engagement-regular text-[#5272b8]'>R</h1>
        <h1 className='text-8xl engagement-regular text-slate-300'>K</h1>

      </div> */}

  <h1 className="text-7xl font-bold mb-2">
    Hey, I'm <span className="bg-gradient-to-r bg- from-[#5272b8] to-[#a4bef7] bg-blue-50 bg-clip-text text-transparent animate-gradient">
      Roshan Kumar
    </span>
  </h1>
  <p class="text-center text-4xl font-bold max-w-md mb-6">
   Software Developer
  </p>
  <div class="flex space-x-4">
  <ColoredButton borderColor={"border-cyan-500"} hoverColor={"hover:bg-cyan-500"} text={"React"} logo='react&theme=light' />

  <ColoredButton borderColor={"border-green-500"} hoverColor={"hover:bg-green-500"} text={"Javascipt"} logo='js' />
  <ColoredButton borderColor={"border-blue-500"} hoverColor={"hover:bg-blue-500"} text={"Java"} logo='java&theme=light' />

  </div>
</div>
    

    </>
  )
}
