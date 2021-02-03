import React from "react";
import "./letter-card.scss";

export const LetterCard = ({ selectedWord, correctLetters }) => {
  //get word
  console.log(selectedWord);
  // console.log(correctLetters);
  //print letters' cards


  return (
    <div className="letters-row">
      {selectedWord.split("").map((letter, i) => (
        <div key={i} className="letters-row__letter">
          {correctLetters.includes(letter) ? letter : ""}
        </div>
      ))}
    </div>
  );
};
