import React from 'react';
import * as BooksAPI from './BooksAPI'
import './App.css'
import Main from './Main.js'
import Search from './Search'

class BooksApp extends React.Component {
  state = {
    books: [],
    loading: true,
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: true
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {this.setState(() => ({
      books,
      loading: false,
    }))
    }).catch(error => console.log(error))
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
      {this.state.showSearchPage ?
        <Search books = {books}/>
        :
      <Main books = {books}/>}
    </div>
  )
  } // render
}

export default BooksApp
