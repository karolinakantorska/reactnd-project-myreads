import React from 'react';
import './App.css'
import BookShelfChanger from './BookShelfChanger'

class Book extends React.Component {
  render(){
  const { cover,title, author, shelf} = this.props;

    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${cover})` }}></div>
            <div className="book-shelf-changer" ><BookShelfChanger/></div>
          </div>
          <div className="book-title">title: {title}</div>
          <div className="book-authors">author: {author}</div>
          <div className="book-authors">shelf: {shelf}</div>
        </div>
    )
  }
}

export default Book
