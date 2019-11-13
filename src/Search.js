import React from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from './BooksAPI';
import './App.css';
import BookList from './BookList';

class Search extends React.Component {
  state = {
    query: '',
    books: [],
    }

  allowedQueries= ['Android', 'Art', 'Artificial Intelligence', 'Astronomy', 'Austen', 'Baseball', 'Basketball', 'Bhagat', 'Biography', 'Brief', 'Business', 'Camus', 'Cervantes', 'Christie', 'Classics', 'Comics', 'Cook', 'Cricket', 'Cycling', 'Desai', 'Design', 'Development', 'Digital Marketing', 'Drama', 'Drawing', 'Dumas', 'Education', 'Everything', 'Fantasy', 'Film', 'Finance', 'First', 'Fitness', 'Football', 'Future', 'Games', 'Gandhi', 'Homer', 'Horror', 'Hugo', 'Ibsen', 'Journey', 'Kafka', 'King', 'Lahiri', 'Larsson', 'Learn', 'Literary Fiction', 'Make', 'Manage', 'Marquez', 'Money', 'Mystery', 'Negotiate', 'Painting', 'Philosophy', 'Photography', 'Poetry', 'Production', 'Programming', 'React', 'Redux', 'River', 'Robotics', 'Rowling', 'Satire', 'Science Fiction', 'Shakespeare', 'Singh', 'Swimming', 'Tale', 'Thrun', 'Time', 'Tolstoy', 'Travel', 'Ultimate', 'Virtual Reality', 'Web Development', 'iOS'
  ]

  handleChange = (event) => {
    this.setState({
      query:event.target.value,
    })
  }

  searchBooks = ()=>(
    BooksAPI.search(this.state.query).then((books) => {this.setState(() => ({
    books,
  }));
  }).catch(error => console.log(error))
)

  render(){
    const {query, books} = this.state;
    const {onShelfChange} = this.props;
    const allowed = this.allowedQueries.map((a) => (a.toLowerCase()));
    const proveQ = allowed.includes(query.toLowerCase());

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link to = '/'>
              <button className="close-search">Close</button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
              type="text"
              value =  { query }
              onChange= { this.handleChange }
              onKeyDown= { this.searchBooks }
              placeholder="Search by title or author"/>
            </div>
          </div>
          <div className="search-books-results">
            <div className="bookshelf-books">

            { (proveQ) ? <BookList prove= {proveQ} books= { books } onShelfChange = { onShelfChange }/>
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
