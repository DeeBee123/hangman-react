import React from "react";
import "./keyboard.scss";

export const Keyboard = ({ correctLetters, incorrectLetters }) => {
  const keys = [
    "q",
    "w",
    "e",
    "r",
    "t",
    "y",
    "u",
    "i",
    "o",
    "p",
    "a",
    "s",
    "d",
    "f",
    "g",
    "h",
    "j",
    "k",
    "l",
    "z",
    "x",
    "c",
    "v",
    "b",
    "n",
    "m",
  ];

  return (
    <div className="keyboard">
      {keys.map((key) => (
        <div
          key={key}
          className={
            correctLetters.includes(key) || incorrectLetters.includes(key)
              ? "keyboard__key keyboard__key--used"
              : "keyboard__key"
          }
        >
          {key.toUpperCase()}
        </div>
      ))}
    </div>
  );
};
