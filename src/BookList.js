import React from 'react';
import './App.css'
import Book from './Book.js'


class BookList extends React.Component {

  render() {
  const {books} = this.props;
  return(

            <ol className="books-grid">
              {books.map((book) =>(
                <li key = { book.title }>
                  <Book cover= { book.imageLinks.thumbnail}
                        title= { book.title }
                        author = {book.authors.map((a) => (<p key={a}>{a}</p>))}
                        shelf= { book.shelf }/>
                </li>
              ))
              }
            </ol>

  )
}
}

export default BookList
