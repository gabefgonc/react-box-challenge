import React, {useState} from "react"

type Props = {
  children: React.ReactNode
  color?: string
}


export const Box = ({children, color}: Props) => {

  return (
    <div className="w-24 h-24 border-gray-200 border-2 rounded-2xl hover:text-black text-white transition-all duration-200 flex justify-center items-center text-3xl font-bold" style={{backgroundColor: color || '#ffffff'}}>
      {children}
    </div>
  )
}
