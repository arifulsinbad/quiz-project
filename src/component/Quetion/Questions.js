import React, { useState } from 'react';
import Options from '../options/Options';
import './questions.css'

const Questions = ({questions}) => {
const {options, question, correctAnswer} =questions;
 // console.log(options)
 const [answer, setAnswer] = useState([])
 console.log(answer)
 const handleClick = (option)=>{
  // console.log(option)

  if(option === correctAnswer){
   setAnswer('Correct Answer')
   // console.log('right')
  }
  else{
   setAnswer('Wrong Answer')
   // console.log('wrong')
  }
 }

// const [correct, setCorrect] = useState([])
// console.log(correct)
 const handleAnswer = (answer)=>{
alert(answer)
 }

 return (
  <div>
   <h2 >{question}</h2>
   <button onClick={()=>handleAnswer(correctAnswer)}>Answer <i class="fa-solid fa-eye"></i></button>
   
   <div>
    {
     options.map(option =><Options option={option} handleClick= {handleClick}></Options>)
    }
    <h2 className={answer === 'Correct Answer' ? `green`:`red`}>{answer}</h2>

   </div>
   <div>

   </div>
  </div>
 );
};

export default Questions;