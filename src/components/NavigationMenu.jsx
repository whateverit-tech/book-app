import React from 'react'
import FavoritesMenu from "../components/FavoritesMenu";

function NavigationMenu() {
  return (
    <nav className="max-w-3xl mx-auto my-2 flex justify-end">
        <FavoritesMenu/>
    </nav>
  )
}

export default NavigationMenu