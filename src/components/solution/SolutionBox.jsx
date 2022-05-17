import React from 'react'

const SolutionBox = ({desc,svg,heading}) => {
  return (
    <div className='text-center my-10 px-7 md:px-0 md:my-0'>
        <div className='text-[#EB8039]'> {svg}</div>
        <h2 className='my-3 text-2xl font-bold text-[#333333]'>{heading}</h2>
        <p className='my-6 text-[#585e61]'>{desc}</p>
    </div>
  )
}

export default SolutionBox