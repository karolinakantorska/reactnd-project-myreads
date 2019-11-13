import React from 'react';
import * as BooksAPI from './BooksAPI';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './Main.js';
import Search from './Search';

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: false,
    }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState(() => ({
      books
    }))
  }).catch(error => console.log(error));
  }

  onShelfChange= (shelf,bookID ) =>{
    const book= {id:bookID};
    
    BooksAPI.update(book, shelf).then(() => {
      BooksAPI.getAll().then((books) => {this.setState(() => ({
        books
      }));
      }).catch(error => console.log(error))
    });
}

  render() {
    const {loading, books}= this.state;
      if (loading){
      return (
        <div>
        <p>Please Wait</p>
        </div>
      );
    }

  return (
    <div className="app">
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
      </div>
      <Route exact path= '/' >
        <Main books = {books} onShelfChange= { this.onShelfChange } />
      </Route>
      <Route path= '/search' >
        <Search onShelfChange= { this.onShelfChange }/>
      </Route>

    </div>
  )
  } // render
}

export default BooksApp
