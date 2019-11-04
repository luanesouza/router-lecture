import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
    render() {
        const books = this.props.books.map( book => (
            <Book book={book}/>
      ))
    
    return (
        <section class='library'>
            <h1> Library </h1>
             {books}
        </section>

        )
    }
}

export default BookList;