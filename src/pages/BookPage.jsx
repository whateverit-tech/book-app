import React from 'react'
import { useSelector } from 'react-redux'
import { FiBook } from 'react-icons/fi'
import BookGrid from '../components/BookGrid'
import GoogleBookLogo from '../components/GoogleBookLogo'
import Search from '../components/Search'
import Section from '../components/Section'


function BookPage() {
    const books = useSelector((state) => state.book.value);

    return (
        <>
            <main className="max-w-3xl mx-auto my-5">
                <GoogleBookLogo/>
                <Search/>
                
                <Section title="Books" icon={<FiBook/>} count={books.totalItems}>
                <BookGrid books={books?.items}/>
                </Section>
            </main>
        </>
    )
}

export default BookPage