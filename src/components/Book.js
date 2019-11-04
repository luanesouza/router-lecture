import React from 'react';
import AboutTheAuthor from './AboutTheAuthor';

const Book = (props) => {
    return (
        <section class='bookInfo'>
            <p id='title'>{props.book.title}</p> 
            <p id='author-name'>Written by {props.book.author}</p> 
            <div class='book-cover-container'>
            <img id='book-cover' src={props.book.bookCover} alt='book-cover'/>
            </div>
            {/* <AboutTheAuthor author={props.book.author} about={props.book.aboutTheAuthor} image={props.book.img}/> */}
        </section>

    )
}
export default Book;