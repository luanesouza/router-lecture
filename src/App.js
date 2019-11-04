import React from 'react';
import {Component} from 'react';
import BookList from './components/BookList';
import LogInForm from './components/LogInForm';
import SignupForm from './components/SignupForm';
import FourOhFour from './components/FourOhFour';
import {
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';

class App extends Component {
  state = {
    books: [
      {title: 'We should all be feminists', author: 'Chimamanda Ngozi Adichie', bookCover: 'https://images-na.ssl-images-amazon.com/images/I/51L9u20bC7L._SX348_BO1,204,203,200_.jpg', aboutTheAuthor: 'Chimamanda Ngozi Adichie grew up in Nigeria. Her work has been translated into over thirty languages and has appeared in various publications, including The New Yorker, Granta, The O. Henry Prize Stories, the Financial Times, and Zoetrope. She is the author of the novels Purple Hibiscus, which won the Commonwealth Writers’ Prize and the Hurston/Wright Legacy Award; Half of a Yellow Sun, which won the Orange Prize and was a National Book Critics Circle Award Finalist and a New York Times Notable Book; and Americanah, which won the National Book Critics Circle Award and was named one of The New York Times Top Ten Best Books of 2013. Ms. Adichie is also the author of the story collection The Thing Around Your Neck.', img: 'https://www.chimamanda.com/wp-content/uploads/2013/04/Chimamanda-Ngozi-Adichie-500x750.jpg'},
      {title: 'A Room of One’s Own', author: 'Virginia Woolf', bookCover: 'https://images-na.ssl-images-amazon.com/images/I/51K5QCF5BXL._SX312_BO1,204,203,200_.jpg', aboutTheAuthor: '', img: ''},
      {title: 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness', author: 'Michelle Alexander', bookCover: 'https://images-na.ssl-images-amazon.com/images/I/51hVN9LrJhL.jpg', aboutTheAuthor: '', img: ''},
      {title: 'Inequality: What Can Be Done?', author: 'Anthony B. Atkinson', bookCover: 'https://images-na.ssl-images-amazon.com/images/I/41JrF-s%2Ba0L._SX329_BO1,204,203,200_.jpg', aboutTheAuthor: '', img: ''},
      {title: 'Racism without Racists: Color-Blind Racism and the Persistence of Racial Inequality in the United States', author: 'Eduardo Bonilla-Silva', bookCover: 'https://images-na.ssl-images-amazon.com/images/I/413Uaj9n41L._SX312_BO1,204,203,200_.jpg', aboutTheAuthor: '', img: ''}
    ],
    book: '',
  }

  render() {
    console.log(this.props)
    return (
      <div className="App">
        <LogInForm />
        <SignupForm />
        <BookList books={this.state.books} />
        <FourOhFour />
        
      </div>
    )
  }
}


export default App;
