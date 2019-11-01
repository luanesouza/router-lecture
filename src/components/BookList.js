import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
    render() {
        const books = this.props.books.map( book => (
            <Book book={book}/>
      ))
    
    return (
        <section>
            <h1> Book List </h1>
            <p>Books {books}</p>
        </section>

        )
    }
}

export default BookList;