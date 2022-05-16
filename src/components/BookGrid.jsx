import React from 'react'
import BookItem from "../components/BookItem";

function BookGrid({ books }) {
  return (
    <div className="my-10 grid grid-cols-3 gap-4">
        {books&& books.map((book, index) => (
        <BookItem book={book} key={'fav-' + index}/>
        ))}
    </div>
  )
}

export default BookGrid