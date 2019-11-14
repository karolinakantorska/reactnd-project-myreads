import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';
import DebounceInput from 'react-debounce-input';

class Search extends React.Component {
  state = {
    query: '',
    booksSearched: [],
    }

  allowedQueries= ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
  ]

  handleChange = event => {
    this.setState({
      query:event.target.value,
    },
    this.searchBooks
    );
};


  searchBooks = ()=>(
    BooksAPI.search(this.state.query).then((books) => {this.setState(() => ({
    booksSearched:books,
  }));
}).catch(error => console.log(error))
)

  render(){
    const {query, booksSearched} = this.state;
    const {onShelfChange, booksMainPage} = this.props;
    const allowed = this.allowedQueries.map((a) => (a.toLowerCase()));
    const proveQ = allowed.includes(query.toLowerCase());

    (() => {
      this.state.booksSearched.map((bookS)=>(
        booksMainPage.map((a)=>(
          (a.id === bookS.id)? bookS.shelf= a.shelf
          : bookS.shelf= 'none'
        ))

      ))
    })()

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link to = '/'>
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <DebounceInput
              debounceTimeout= {1000}
              type="text"
              value =  { query }
              onChange= { this.handleChange }
              placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <div className="bookshelf-books">

            { (proveQ) ? <BookList prove= {proveQ} books= { booksSearched } onShelfChange = { onShelfChange } />
            : <div>
                <p>Please use the worlds from a list:</p>
                <p>{this.allowedQueries}</p>
              </div>
            }
            </div>
          </div>
        </div>
    )
  }
}
export default Search
