import React from 'react'

const NextArrow = (props) => {
    const { onClick } = props;
  return (
    <div
      className="absolute top-1/2 right-[-50px] transform -translate-y-1/2 cursor-pointer 
                 bg-white p-4 rounded-full shadow-xl border border-gray-200 text-xl 
                 flex items-center justify-center w-12 h-12 z-50"
      onClick={onClick}
    >
      ▶
    </div>
  )
}

export default NextArrow
