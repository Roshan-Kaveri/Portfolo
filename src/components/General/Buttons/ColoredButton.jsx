import React from 'react'

export default function ColoredButton({ text, borderColor, logo="js", hoverColor }) {
  return (
    <button 
      className={`flex font-bold items-center gap-2 px-4 py-2 rounded-full border ${borderColor} ${hoverColor} hover:text-black transition-colors duration-300`}
    >
      {logo && (
        <img 
          src={`https://skillicons.dev/icons?i=${logo}`}
          alt={logo}
          className="w-6 h-6"
        />
      )}
      <span className="text-white hover:text-black">{text}</span>
    </button>
  )
}
