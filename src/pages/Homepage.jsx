import React from 'react'
import { useSelector } from 'react-redux'
import { FiBook, FiBookmark } from 'react-icons/fi'
import BookGrid from '../components/BookGrid'
import Carousel from '../components/Carousel'
import Section from '../components/Section'

function Homepage() {
    const books = useSelector((state) => state.book.value);
    const {favoriteList} = useSelector((state) => state.book);

    return (
        <>
            <Section title="Books" icon={<FiBook/>} isPage url="books">
            <Carousel books={books?.items}/>
            </Section>

            <Section title="Favorites" icon={<FiBookmark/>} isPage url="favorites">
            <BookGrid books={favoriteList}/>
            </Section>
        </>
    )
}

export default Homepage