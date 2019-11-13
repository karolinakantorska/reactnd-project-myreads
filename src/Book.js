import React from 'react';
import './App.css';

class Book extends React.Component {

  handleShelfChange =(event)=>{
    this.props.onShelfChange(event.target.value, this.props.id);
  }

  render(){
  const { cover,title, author, shelf, onShelfChange } = this.props;

    return (
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${cover})` }}></div>
            <div className="book-shelf-changer" >
              <select>
                <option value="move" disabled>Move to...</option>
                <option value="currentlyReading" onClick = {this.handleShelfChange} >Currently Reading</option>
                <option value="wantToRead" onClick = {this.handleShelfChange}>Want to Read</option>
                <option value="read" onClick = {this.handleShelfChange}>Read</option>
                <option value="none" onClick = {this.handleShelfChange}>None</option>
              </select>
            </div>
          </div>
          <div className="book-title">{title}</div>
          <div className="book-authors">{author}</div>
          <div className="book-authors">{shelf}</div>
        </div>
    )
  }
}

export default Book
