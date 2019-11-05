import React, {Component} from 'react';
import Book from './Book';

class BookList extends Component {
    logout(e){
        e.preventDefault()
        this.props.history.push('/');
        console.log('clicked', this);
    }
    render() {
        const books = this.props.books.map( book => (
            <Book key={book.author} book={book}/>
      ))
    
    return (
        <section className='library'>
            <button onClick={(e) => this.logout(e)}> LogOut </button>
            <h1> Library </h1>
             {books}
        </section>

        )
    }
}

export default BookList;