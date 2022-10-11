import React, { useState } from 'react';
import './option.css'
const Options = ({option,handleClick}) => {
 
 
 return (
 
  <div onClick={()=>handleClick(option)} className='option'>

   <h3>{option}</h3>
  </div>
 );
};

export default Options;