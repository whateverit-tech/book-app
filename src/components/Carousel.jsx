import React from 'react'
import Slider from "react-slick";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import BookItem from "../components/BookItem";

function Carousel({ books }) {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
      };

    return (
        <div>
        <Slider {...settings}>
            {books&& books.map((book, index) => (
            <BookItem book={book} key={'fav-' + index}/>
            ))}
        </Slider>
      </div>
    )
}

export default Carousel