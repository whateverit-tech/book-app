import React from 'react'
import { useSelector } from 'react-redux';
import BookGrid from '../components/BookGrid';
import FancyTitle from '../components/FancyTitle';

function Favorite() {
  const favorites = useSelector(state => state.book.favoriteList);

  return (
    <div className="flex flex-col gap-2">
      <FancyTitle title="Favorite"/>
      <BookGrid books={favorites}/>
    </div>
  )
}

export default Favorite