import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Questions from '../Quetion/Questions';

const Quizs = ({params}) => {
 const router = useLoaderData()
 const {data} = router;
const {questions} = data;
 // console.log(questions)
 return (
  <div>
  {
    questions.map(questions => <Questions key={questions.id} questions={questions}></Questions>)
  }
  </div>
 );
};

export default Quizs;