import React, {useState} from 'react';

function ActivateButton(props){
  let [activeClass, setActive] = useState('black');

  function activeColor(){
    setActive(activeClass = 'blue')
  }

  function disactiveColor(){
    setActive(activeClass = 'black')
  }

  return <div className="activate">
            <input type="text" className="input"
                   id="inputLetters"
                   onKeyDown={props.onKeyDown}
                   onFocus={activeColor}
                   onBlur={disactiveColor}/>
            <label htmlFor="inputLetters" className={activeClass}>Click here to type</label>
         </div>
  };

export default ActivateButton;
