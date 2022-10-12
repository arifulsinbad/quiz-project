import React, { useState } from 'react';
import './option.css'
const Options = ({option,handleClick}) => {
   
 
 return (
 
  <div
  
  onClick={()=>handleClick(option)} className='option'>


      <label for={option}><h3>{option}</h3></label>
      <input type="radio" id={option} name="drone" value='select'></input>
             
      
    
  </div>
 );
};

export default Options;