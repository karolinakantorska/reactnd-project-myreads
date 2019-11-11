import React from 'react';
import './App.css'
import Shelf from './Shelf'

class Main extends React.Component {
    render (){
    const {books} = this.props;
    const appShelf = [
      {text: 'Currently Reading',
      filterKey: 'currentlyReading'
      },
      {text: 'Want to Read',
      filterKey: 'wantToRead'
      },
      {text: 'Read',
      filterKey: 'read'
      }
    ]

    return(

    <div className="list-books-content">
    {appShelf.map((s) => (
      <Shelf key= {s.filterKey} books= { books } appShelf= {s}/>
    ))}
      <div className="open-search">
        <button onClick={() => this.setState({ showSearchPage: true })}>Add a book</button>
      </div>
    </div>
    )
  }
}
export default Main
