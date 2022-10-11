import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Quetion/Questions';

const Quizs = ({params}) => {
 const router = useLoaderData()
 const {data} = router;
const {questions , name} = data;
 // console.log(router)
 return (
  <div>
   <h1>{name}</h1>
  {
    questions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
  }
  </div>
 );
};

export default Quizs;