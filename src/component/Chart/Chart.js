import React from 'react';
import { useLoaderData } from 'react-router-dom';

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const Chart = () => {
 
   const array = useLoaderData();
  const {data} = array;
  console.log(data)

 return (
  <div className='chart'>
  <LineChart width={500} height={400} data={data}>
  <Line type="monotone" dataKey="total" stroke="#82ca9d" />
  <XAxis dataKey="name" />
          <YAxis />
          <Tooltip></Tooltip>

  </LineChart>
  </div>
 );
};

export default Chart;