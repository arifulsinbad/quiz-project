import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './chart.css'
const Chart = () => {
 
   const array = useLoaderData();
  const {data} = array;
  console.log(data)

 return (
  <div className='chart'>
 <div>
 <ResponsiveContainer width="90%" height={200}>
 <LineChart width={500} height={400} data={data}>
  <Line type="monotone" dataKey="total" stroke="#82ca9d" />
  <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>
          

  </LineChart>
  </ResponsiveContainer>
 </div>
  </div>
 );
};

export default Chart;