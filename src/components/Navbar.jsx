import React from 'react'
import LinkItem from './LinkItem'

function Navbar() {
  return (
    <nav className="flex gap-2 text-sm text-gray-500 justify-center my-4">
        <LinkItem to="/" menu="Home"/>
        <LinkItem to="pokemons" menu="Pokemon"/>
        <LinkItem to="books" menu="Book"/>
        <LinkItem to="favorites" menu="Favorite"/>
    </nav>
  )
}

export default Navbar