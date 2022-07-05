import React, { useState } from 'react';
import '../src/App.css';
import sample1 from './bookFiles/sample_book 1.txt';
import sample2 from './bookFiles/sample_book 2.txt';

const App = () => {
  //set state to identify which book to render
  const [bookRender, setBookRender] = useState('');

  const BookOne = () => {
    fetch(sample1)
      .then((row) => row.text())
      .then((text) => {
        console.log('text:', text);
        setBookRender(text);
      });
  };
  const BookTwo = () => {
    fetch(sample2)
      .then((row) => row.text())
      .then((text) => {
        console.log(text);
        setBookRender(text);
      });
  };

  return (
    <div>
      <div className="bookContainer">
        <h1>BOOK APP</h1>
        <h2>Choose your Book</h2>
        <button onClick={BookOne}>Sample Book 1 </button>
        <button onClick={BookTwo}>Sample Book 2 </button>
        <div className="textContainer">
          <pre>{bookRender}</pre>
        </div>
      </div>
    </div>
  );
};
export default App;
