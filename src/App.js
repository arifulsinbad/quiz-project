import logo from './logo.svg';
import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './layout/Main';
import Home from './component/home/Home';
import Chart from './component/Chart/Chart';
import Blog from './component/blog/Blog';

function App() {
  const router = createBrowserRouter([
    {
path: '/', element:<Main></Main>,
children:[
{
path: '/', element:<Home></Home>
},
{
  path:'/chart', element:<Chart></Chart>
},
{
  path:'/blog', element:<Blog></Blog>
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
