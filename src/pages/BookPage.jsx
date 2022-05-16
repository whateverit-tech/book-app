import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiBook, FiBookmark } from 'react-icons/fi'
import BookGrid from '../components/BookGrid'
import Carousel from '../components/Carousel'
import GoogleBookLogo from '../components/GoogleBookLogo'
import Search from '../components/Search'
import Section from '../components/Section'

import { getBooks } from "../slice/book";

function BookPage() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getBooks());
    }, [dispatch]);

    const books = useSelector((state) => state.book.value);
    const {favoriteId, favoriteList} = useSelector((state) => state.book);

    return (
        <>
            <main className="max-w-3xl mx-auto my-5">
                <GoogleBookLogo/>
                <Search/>
                
                <Section title="Books" icon={<FiBook/>} count={books.totalItems} isPage url="#">
                <Carousel books={books?.items}/>
                </Section>

                <Section title="Favorites" icon={<FiBookmark/>} count={favoriteId.length} isPage>
                <BookGrid books={favoriteList}/>
                </Section>
            </main>
        </>
    )
}

export default BookPage