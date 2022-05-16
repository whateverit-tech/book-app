import React from 'react'
import { useSelector } from 'react-redux'

function FavoritesMenu() {
  const favorite = useSelector((state) => state.book.favoriteId)

  return (
    <a href="/#" className="font-semibold text-gray-500 text-sm hover:text-blue-500 inline-flex gap-1 align-center">
        <span>Favorites</span>
        <span className="py-1 px-2 rounded-md bg-red-400 text-white text-xs">
            {favorite.length}
        </span>
    </a>
  )
}

export default FavoritesMenu