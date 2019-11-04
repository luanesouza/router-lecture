import React from 'react';
import {Component} from 'react';
import BookList from './components/BookList'
import './App.css';

class App extends Component {
  state = {
    books: [
      {title: 'We should all be feminists', author: 'Chimamanda Ngozi Adichie', aboutTheAuthor: 'Chimamanda Ngozi Adichie grew up in Nigeria. Her work has been translated into over thirty languages and has appeared in various publications, including The New Yorker, Granta, The O. Henry Prize Stories, the Financial Times, and Zoetrope. She is the author of the novels Purple Hibiscus, which won the Commonwealth Writers’ Prize and the Hurston/Wright Legacy Award; Half of a Yellow Sun, which won the Orange Prize and was a National Book Critics Circle Award Finalist and a New York Times Notable Book; and Americanah, which won the National Book Critics Circle Award and was named one of The New York Times Top Ten Best Books of 2013. Ms. Adichie is also the author of the story collection The Thing Around Your Neck.', img: 'https://www.chimamanda.com/wp-content/uploads/2013/04/Chimamanda-Ngozi-Adichie-500x750.jpg'},

      {title: 'A Room of One’s Own', author: 'Virginia Woolf', aboutTheAuthor: '', img: ''},
      {title: 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness', author: 'Michelle Alexander', aboutTheAuthor: '', img: ''},
      {title: 'Inequality: What Can Be Done?', author: 'Anthony B. Atkinson', aboutTheAuthor: '', img: ''},
      {title: 'Racism without Racists: Color-Blind Racism and the Persistence of Racial Inequality in the United States', author: 'Eduardo Bonilla-Silva', aboutTheAuthor: '', img: ''}
    ],
    book: '',
  }
  render() {
    return (
      <div className="App">
        <BookList books={this.state.books} />
      </div>
    )
  }
}


export default App;
