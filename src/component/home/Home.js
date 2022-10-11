import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './home.css'
import Quiz from './Quiz';
const Home = () => {
 const quiz = useLoaderData();
 const {data} = quiz
 
 // console.log(data)
 return (
  <div>
<div className='img'>
<img src={'Untitled-2.jpg'} alt="" />
<h1>Best programming language for web development Quiz</h1>

</div>
<div>
 {
  data.map(quiz =><Quiz key={quiz.id} quiz={quiz}></Quiz>)
 }
</div>
   
  </div>
 );
};

export default Home;