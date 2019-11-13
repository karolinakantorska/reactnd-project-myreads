import React from 'react';
import './App.css';
import Book from './Book.js';

function BookList (props) {
  const {books, onShelfChange} = props;

  if (!books){
    return (
      <div>
      <p>No books found</p>
      </div>
    )
  }
  return(
    <ol className="books-grid">
      {books.map((book) =>(
        <li key = { book.id }>
            <Book cover= { (book.hasOwnProperty('imageLinks'))? book.imageLinks.thumbnail :'' }
                  title= { book.title }
                  author = {book.authors}
                  shelf= { book.shelf }
                  onShelfChange ={ onShelfChange }
                  id= {book.id}/>
        </li>
      ))}
    </ol>
  )
}

export default BookList
