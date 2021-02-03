import React, { useEffect, useState } from "react";
import "./App.scss";
import { Hangman, LetterCard, Keyboard } from "./components";
// import data from "../public/db.json"

const words = ["jane", "jane young", "teddie"];
const selectedWord = words[Math.floor(Math.random() * words.length)];
console.log(selectedWord);

function App() {
  const [gameOn, setGameOn] = useState(true);
  const [correctLetters, setCorrectLetters] = useState([]);
  const [incorrectLetters, setIncorrectLetters] = useState([]);
  const [popUp, setPopUp] = useState(false);

  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      console.log(key);
      console.log(keyCode);
      if (gameOn && keyCode >= 65 && keyCode <= 90) {
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) {
          if (!correctLetters.includes(letter)) {
            setCorrectLetters((currentLetters) => [...currentLetters, letter]);
          } else {
            // show(setPopUp);
          }
        } else {
          if (!incorrectLetters.includes(letter)) {
            setIncorrectLetters((currentLetters) => [
              ...currentLetters,
              letter,
            ]);
          } else {
            // show(setPopUp);
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, incorrectLetters, gameOn]);

  function playAgain() {
    setGameOn(true);

    // Empty Arrays
    setCorrectLetters([]);
    setIncorrectLetters([]);

    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }
  
  return (
    <div className="App">
      <header className="category-name">Aircraft</header>
      <div className="sides">
        <Hangman incorrectLetters={incorrectLetters} />
        <LetterCard
          selectedWord={selectedWord}
          correctLetters={correctLetters}
        />
      </div>

      <Keyboard
        correctLetters={correctLetters}
        incorrectLetters={incorrectLetters}
      />
    </div>
  );
}

export default App;
