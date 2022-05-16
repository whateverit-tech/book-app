import React from 'react'
import BookItem from "../components/BookItem";

function BookGrid({ books }) {
  return (
    <>
      {books.length > 0 ? (
        <div className="my-10 grid grid-cols-3 gap-4">
          {books.map((book, index) => (
            <BookItem book={book} key={'fav-' + index}/>
          ))}
        </div>
      ) : (
        <h5 className="text-gray-300 text-sm text-center">Data Kosong</h5>
      )}
    </>
  )
}

export default BookGrid