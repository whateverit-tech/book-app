import React from 'react'
import { Link } from 'react-router-dom'

function LinkItem({ to, menu }) {
  return (
    <Link to={to}>{ menu }</Link>
  )
}

export default LinkItem