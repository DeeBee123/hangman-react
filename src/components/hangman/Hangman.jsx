import React from "react";
import "./hangman.scss";

export const Hangman = ({incorrectLetters})=>{
const mistakes = incorrectLetters.length;
    
return(
        
<svg height="400" width="400">
  <g className="body">
    {mistakes>0 && <g className="body__head">
    <circle cx="200" cy="80" r="20" /> {mistakes>1 && <g className="head__rEyes">
      <circle cx="193" cy="80" r="4"/>
      <circle cx="207" cy="80" r="4"/>
     
      <g className="head__xEyes hide">
        <line x1="190" y1="78" x2="196" y2="84"/>
        <line x1="204" y1="78" x2="210" y2="84"/>
        <line x1="190" y1="84" x2="196" y2="78"/>
        <line x1="204" y1="84" x2="210" y2="78"/>
      </g>
    </g>}</g>}
    
     {mistakes>2 && <line x1="200" y1="100" x2="200" y2="150" />}
    {mistakes>3 && <line className="arm--left" x1="200" y1="120" x2="170" y2="140" />}
    {mistakes>4 && <line className="arm--right" x1="200" y1="120" x2="230" y2="140" />}
    {mistakes>5 && <line className="leg--left" x1="200" y1="150" x2="180" y2="190" />}
    {mistakes>6 && <line className="leg--right" x1="200" y1="150" x2="220" y2="190" />}
    
  </g>
  <g className="structure">
    <line x1="10" y1="250" x2="150" y2="250" />
    <line className="door1" x1="150" y1="250" x2="200" y2="250" />
    <line  className="door2" x1="200" y1="250" x2="250" y2="250" />
    <line x1="250" y1="250" x2="390" y2="250" />
    <line x1="100" y1="250" x2="100" y2="20" />
    <line x1="100" y1="20" x2="200" y2="20" />
    <line className="rope" x1="200" y1="20" x2="200" y2="60" />
    </g>
  </svg>
    )
}