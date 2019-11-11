import React from 'react';
import './App.css'
import BookList from './BookList'

class Search extends React.Component {
  render(){
    const {books} = this.props;
    return(
          <div className="search-books">
            <div className="search-books-bar">
              <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>
              <div className="search-books-input-wrapper">
                <input type="text" placeholder="Search by title or author"/>
              </div>
            </div>

            <div className="search-books-results">
              <div className="bookshelf-books">
                  <BookList
                    books= { books}
                   />
              </div>
            </div>
    )
  }
}

export default Search
