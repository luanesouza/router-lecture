import React from 'react';
import {Component} from 'react';
import './App.css';

class App extends Component {
  state = {
    books: [
      {title: 'We should all be feminists', author: 'Chimamanda Ngozi Adichie'},
      {title: 'A Room of One’s Own', author: 'Virginia Woolf'},
      {title: 'The New Jim Crow: Mass Incarceration in the Age of Colorblindness', author: 'Michelle Alexander'},
      {title: 'Inequality: What Can Be Done?', author: 'Anthony B. Atkinson'},
      {title: 'Racism without Racists: Color-Blind Racism and the Persistence of Racial Inequality in the United States', author: 'Eduardo Bonilla-Silva'}
    ],
    book: ''
  }
  render() {
    return (
      <div className="App">
        
      </div>
    )
  }
}


export default App;
