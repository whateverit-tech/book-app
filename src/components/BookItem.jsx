import BookmarkButton from './BookmarkButton';

function BookItem({ book }) {


    const toString = (arr) => {
        if (arr.length) return arr.join(", ");
        return "-";
    }

    return (
        <div className="flex justify-center">
            <div className="relative border-gray-300 border p-2 rounded-lg shadow-sm items-center w-[190px]" key={book.id}>
                <img 
                    src={book?.volumeInfo?.imageLinks?.thumbnail} 
                    alt="thumbnail" 
                    className="rounded-md mx-auto mb-5 object-cover w-full h-[240px]"/>
                
                <div className="flex flex-col gap-2">
                    <div>
                        <h3 className="font-semibold line-clamp-3 text-ellipsis">
                            {book.volumeInfo.title}
                        </h3>
                    </div>
                    <div>
                        <span className="text-sm text-gray-400">Author</span>
                        <h5 className="line-clamp-3 text-ellipsis text-xs">
                            {toString(book?.volumeInfo?.authors ?? "")}
                        </h5>
                    </div>
                </div>

                <BookmarkButton book={book}/>
            </div>
        </div>
    )
}

export default BookItem