import React from 'react';
import AboutTheAuthor from './AboutTheAuthor';

const Book = (props) => {
    return (
        <section className='bookInfo'>
            <p id='title'>{props.book.title}</p> 
            <p id='author-name'>Written by {props.book.author}</p> 

            <img id='book-cover' src={props.book.bookCover} alt='book-cover'/>
            {/* <AboutTheAuthor author={props.book.author} about={props.book.aboutTheAuthor} image={props.book.img}/> */}
        </section>

    )
}
export default Book;