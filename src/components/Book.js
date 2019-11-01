import React from 'react';

const Book = (props) => {
    console.log(props)
    return (
        <main>
            <h1>Book</h1>
            <p>{props.book.title}</p>
            <p>{props.book.author}</p>

        </main>

    )
}
export default Book;