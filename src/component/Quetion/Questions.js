import React from 'react';
import Options from '../options/Options';

const Questions = ({questions}) => {
const {options, question, correctAnswer} =questions;
 console.log(options)
 return (
  <div>
   <h2>{question}</h2>
   <div>
    {
     options.map(option =><Options option={option}></Options>)
    }
   </div>
  </div>
 );
};

export default Questions;