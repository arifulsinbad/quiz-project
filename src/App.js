import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/home/Home';
import Chart from './component/Chart/Chart';
import Blog from './component/blog/Blog';
import Quiz from './component/home/Quiz';
import Quizs from './component/quizs/Quizs';

function App() {
  const router = createBrowserRouter([
    {
path: '/', element:<Main></Main>,
children:[
{
path: '/',loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
 element:<Home></Home>
},
{
  path:'/chart', loader: ()=> fetch('https://openapi.programming-hero.com/api/quiz'),
   element:<Chart></Chart>
},
{
  path:'/blog', element:<Blog></Blog>
},
{
  path: '/quizs/:quizsid', loader:async({params})=>{
    // console.log(params)
    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.quizsid}`)
  },
  element:<Quizs></Quizs>
}

]
    }
  ]);
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
