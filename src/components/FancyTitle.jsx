import React from 'react'

function FancyTitle({ title }) {
  return (
    <h5 className="font-semibold my-4 text-2xl text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">{ title }</h5>
  )
}

export default FancyTitle