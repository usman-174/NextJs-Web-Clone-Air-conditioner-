import React from 'react'

const SolutionBox = ({desc,svg,heading}) => {
  return (
    <div className='text-center my-8 px-7 md:px-0 md:my-0'>
        <div className='text-[#EB8039]'> {svg}</div>
        <h1 className='my-3 text-3xl font-bold text-[#333333]'>{heading}</h1>
        <p className='my-1'>{desc}</p>
    </div>
  )
}

export default SolutionBox