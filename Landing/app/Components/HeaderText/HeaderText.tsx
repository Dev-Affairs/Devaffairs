import React from 'react'

function HeaderText({ title }: { title: string }) {
  return (
    <>
      <h1 className='text-3xl md:text-5xl font-bold mt-4 text-gray-800'>
        {title}
      </h1>
    </>
  )
}

export default HeaderText