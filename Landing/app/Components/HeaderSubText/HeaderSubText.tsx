import React from 'react'

function HeaderSubText({ text }: { text: string }) {
  return (
    <>
      <p className='text-gray-600 mt-4 text-lg'>{text}</p>
    </>
  )
}

export default HeaderSubText