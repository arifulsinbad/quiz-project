import React from 'react';
import { Link } from 'react-router-dom';
import './quiz.css'
const Quiz = ({quiz}) => {
 // console.log(quiz)
 const {id, logo, name, total} = quiz;
 return (
  <div className='logo'>
   <img src={logo} alt="" />
   <div className='name'>
    <h4>{name}</h4>
    <Link to = {`/quizs/${id}`}><button>Go Now Quiz</button></Link>
   </div>
  </div>
 );
};

export default Quiz;