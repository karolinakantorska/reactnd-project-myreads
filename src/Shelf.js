import React from 'react';
import './App.css'
import BookList from './BookList'


class Shelf extends React.Component {

  render(){
  const {books,appShelf} = this.props;

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{appShelf.text}</h2>
      <div className="bookshelf-books">
          <BookList
            books= { books.filter((book) => {
              return book.shelf === appShelf.filterKey
            }) }
           />
      </div>
    </div>
  )}
}

export default Shelf
