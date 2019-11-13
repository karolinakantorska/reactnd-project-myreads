import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Shelf from './Shelf';

function Main (props) {
  const {books,onShelfChange} = props;
  const appShelf = [
    {text: 'Currently Reading',
    filterKey: 'currentlyReading'
    },
    {text: 'Want to Read',
    filterKey: 'wantToRead'
    },
    {text: 'Read',
    filterKey: 'read'
    },
  ];

  return(
  <div className="list-books-content">
  {appShelf.map((s) => (
    <Shelf key= {s.filterKey} books= { books } appShelf= {s} onShelfChange = {onShelfChange}/>
  ))}
    <div className="open-search">
      <Link to = '/search'>
        <button >Add a book</button>
      </Link>
    </div>
  </div>
  )
}
export default Main
