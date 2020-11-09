import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';


function LettersList(props){
  return(
    <ul className="list">
        { props.letters.map((item, index) => {
          return <li key={index} className="item">{item}</li>
          })
        }
    </ul>
  )
}

export default LettersList
