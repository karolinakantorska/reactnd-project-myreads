import React from 'react';
import './App.css';
import BookList from './BookList';

function Shelf (props) {
  const {books,appShelf,onShelfChange} = props;

  return(
    <div className="bookshelf">
      <h2 className="bookshelf-title">{appShelf.text}</h2>
      <div className="bookshelf-books">
          <BookList onShelfChange = {onShelfChange}
            books= { books.filter((book) => {
              return book.shelf === appShelf.filterKey;
            })}
           />
      </div>
    </div>
  )
}

export default Shelf
