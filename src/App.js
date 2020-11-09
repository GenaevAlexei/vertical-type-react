import React, { useState } from 'react';
import './App.css';
import ActivateButton from './components/activateButton';
import LettersList from './components/lettersList';

function App() {
  let [letters, setLetters] = useState([]);

  const keyHandler = function(event){
    let letter = event.key;
    let regexp = /[a-zA-Zа-яА-ЯёЁ]/i;

    if (regexp.test(letter) === true && letter.length === 1) {
        setLetters(letters.concat([letter]));
    }

    console.log(letters)
  }

  return (
      <div className="wrapper">
        <LettersList letters={letters}/>
        <ActivateButton onKeyDown={keyHandler} />
      </div>
  );
}

export default App;
