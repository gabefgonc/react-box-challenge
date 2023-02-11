import React from "react"
import {FaPlus} from 'react-icons/fa'

type Props = {
  onClick: React.MouseEventHandler<HTMLButtonElement>
}

export const Separator = ({onClick}: Props) => {
  return (
    <button className="group h-24 text-gray-700 border-gray-700 bg-gray-700 outline-none  rounded-2xl w-2 flex justify-center items-center hover:text-2xl hover:w-24 hover:bg-transparent" onClick={onClick}>
      <FaPlus className="hidden group-hover:block" />
    </button>
  )
}
